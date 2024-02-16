import pkg from "./protobuf/compiled.protobuf.js";
const { safevue_edge: MqttMessage } = pkg;

function generateCrewAssistPayload(watchId) {
  let m = {
    version: 1,
    timestamp: Math.floor(Date.now() / 1000),
    crewAssistData: {
      trigger: MqttMessage.Command.CrewAssistData.Trigger.MANUAL,
    },
    resTopic: `cmd/watch/${watchId}/crew-assist/res`,
  };

  console.log("object:");
  console.log(m);

  return MqttMessage.Command.encode(m).finish();
}

function run() {
  let payload = generateCrewAssistPayload("C46E330C1F60");
  console.log("payload:");
  console.log(payload.toString("hex"));
}

run();
