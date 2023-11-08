package Test;

//import com.sun.jdi.PrimitiveValue;
import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

public class Test extends Simulation {
    //HTTP Configuration
    private HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://videogamedb.uk/api")
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");

    // RUNTIME PARAMETERS
    private static final int USER_COUNT = Integer.parseInt(System.getProperty("USERS", "1000"));
    private static final int RAMP_DURATION = Integer.parseInt(System.getProperty("RAMP_DURATION", "10"));


    //FEEDER FOR TEST DATA
    private static FeederBuilder.FileBased<Object> jsonFeeder = jsonFile("data/gameJsonFile.json").random();

    //BEFORE BLOCK
    @Override
    public void before() {
        System.out.printf("Running test with %d users%n", USER_COUNT);
        System.out.printf("Ramping users over %d seconds%n", RAMP_DURATION);
    }

    // HTTP CALLS
    private static ChainBuilder getAllGames =
            exec(http("Get all games")
                    .get("/videogame"));

    private static ChainBuilder authenticate =
            exec(http("Authenticate")
                    .post("/authenticate")
                    .body(StringBody("{\n" +
                            " \"password\": \"admin\",\n" +
                            " \"username\": \"admin\"\n" +
                            "}"))
                    .check(jmesPath("token").saveAs("jwtToken")));

    private static ChainBuilder createNewGame =
            feed(jsonFeeder)
                    .exec(http("Create New Game - #{name}")
                    .post("/videogame")
                    .header("Authorization", "Bearer #{jwtToken}")
                    .body(ElFileBody("data/gameJsonFile.json")).asJson());

    private static ChainBuilder getLastPostedGame =
            exec(http("Get Last Posted Game - #{name}")
                    .get("/videogame/#{id}")
                    .check(jmesPath("name").isEL("#{name}")));

    private static ChainBuilder deleteLastPostedGame =
            exec(http("Delete Game - #{name}")
                    .delete("/videogame/#{id}")
                    .header("Authorization", "Bearer #{jwtToken}")
                    .check(bodyString().is("Video game deleted")));

    //Scenario definition
    // 1. Get all video games
    // 2. Authenticate
    // 3. Create a new game
    // 4. Get details of newly created game
    // 5. Delete newly created game
    private ScenarioBuilder scn = scenario("Stress test")
            .exec(getAllGames)
            .pause(2)
            .exec(authenticate)
            .pause(2)
            .exec(createNewGame)
            .pause(2)
            .exec(getLastPostedGame)
            .pause(2)
            .exec(deleteLastPostedGame);

    // Load Simulation
    {
        setUp(
                scn.injectOpen(
                        nothingFor(5),
                        rampUsers(USER_COUNT).during(RAMP_DURATION)
                        )
        ).protocols(httpProtocol);
    }

}
