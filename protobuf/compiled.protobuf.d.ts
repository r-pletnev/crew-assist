import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace safevue_edge. */
export namespace safevue_edge {

    /** Properties of a Command. */
    interface ICommand {

        /** API version; set to 1 */
        version?: (number|null);

        /** unix timestamp in seconds */
        timestamp?: (number|null);

        /** response topic i.e. where the requester is listening for response */
        resTopic?: (string|null);

        /** Command crewAssistData */
        crewAssistData?: (safevue_edge.Command.ICrewAssistData|null);
    }

    /** Represents a Command. */
    class Command implements ICommand {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.ICommand);

        /** API version; set to 1 */
        public version: number;

        /** unix timestamp in seconds */
        public timestamp: number;

        /** response topic i.e. where the requester is listening for response */
        public resTopic: string;

        /** Command crewAssistData. */
        public crewAssistData?: (safevue_edge.Command.ICrewAssistData|null);

        /** Command data. */
        public data?: "crewAssistData";

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: safevue_edge.ICommand): safevue_edge.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link safevue_edge.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link safevue_edge.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Command;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Command
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Command {

        /** Properties of a CrewAssistData. */
        interface ICrewAssistData {

            /** CrewAssistData trigger */
            trigger?: (safevue_edge.Command.CrewAssistData.Trigger|null);
        }

        /** Represents a CrewAssistData. */
        class CrewAssistData implements ICrewAssistData {

            /**
             * Constructs a new CrewAssistData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Command.ICrewAssistData);

            /** CrewAssistData trigger. */
            public trigger: safevue_edge.Command.CrewAssistData.Trigger;

            /**
             * Creates a new CrewAssistData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CrewAssistData instance
             */
            public static create(properties?: safevue_edge.Command.ICrewAssistData): safevue_edge.Command.CrewAssistData;

            /**
             * Encodes the specified CrewAssistData message. Does not implicitly {@link safevue_edge.Command.CrewAssistData.verify|verify} messages.
             * @param message CrewAssistData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Command.ICrewAssistData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CrewAssistData message, length delimited. Does not implicitly {@link safevue_edge.Command.CrewAssistData.verify|verify} messages.
             * @param message CrewAssistData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Command.ICrewAssistData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CrewAssistData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CrewAssistData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Command.CrewAssistData;

            /**
             * Decodes a CrewAssistData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CrewAssistData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Command.CrewAssistData;

            /**
             * Verifies a CrewAssistData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CrewAssistData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CrewAssistData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Command.CrewAssistData;

            /**
             * Creates a plain object from a CrewAssistData message. Also converts values to other types if specified.
             * @param message CrewAssistData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Command.CrewAssistData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CrewAssistData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CrewAssistData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CrewAssistData {

            /** Trigger enum. */
            enum Trigger {
                MANUAL = 0,
                DISMISS = 1,
                FALL = 2
            }
        }
    }

    /** Properties of a CommandResponse. */
    interface ICommandResponse {

        /** API version */
        version?: (number|null);

        /** unix timestamp in seconds from Command request */
        timestamp?: (number|null);

        /** True if successful, False otherwise */
        success?: (boolean|null);

        /** error message if `success` is False */
        message?: (string|null);
    }

    /** Represents a CommandResponse. */
    class CommandResponse implements ICommandResponse {

        /**
         * Constructs a new CommandResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.ICommandResponse);

        /** API version */
        public version: number;

        /** unix timestamp in seconds from Command request */
        public timestamp: number;

        /** True if successful, False otherwise */
        public success: boolean;

        /** error message if `success` is False */
        public message: string;

        /**
         * Creates a new CommandResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommandResponse instance
         */
        public static create(properties?: safevue_edge.ICommandResponse): safevue_edge.CommandResponse;

        /**
         * Encodes the specified CommandResponse message. Does not implicitly {@link safevue_edge.CommandResponse.verify|verify} messages.
         * @param message CommandResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.ICommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommandResponse message, length delimited. Does not implicitly {@link safevue_edge.CommandResponse.verify|verify} messages.
         * @param message CommandResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.ICommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommandResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.CommandResponse;

        /**
         * Decodes a CommandResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.CommandResponse;

        /**
         * Verifies a CommandResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommandResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommandResponse
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.CommandResponse;

        /**
         * Creates a plain object from a CommandResponse message. Also converts values to other types if specified.
         * @param message CommandResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.CommandResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommandResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommandResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event version */
        version?: (number|null);

        /** message sent timestamp; unix timestamp in seconds */
        timestamp?: (number|null);

        /** Event appStartUpData */
        appStartUpData?: (safevue_edge.Event.IAppStartUpData|null);

        /** Event fallDetectedData */
        fallDetectedData?: (safevue_edge.Event.IFallDetectedData|null);

        /** Event geofenceEnteredData */
        geofenceEnteredData?: (safevue_edge.Event.IGeofenceEnteredData|null);
    }

    /** Represents an Event. */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.IEvent);

        /** Event version. */
        public version: number;

        /** message sent timestamp; unix timestamp in seconds */
        public timestamp: number;

        /** Event appStartUpData. */
        public appStartUpData?: (safevue_edge.Event.IAppStartUpData|null);

        /** Event fallDetectedData. */
        public fallDetectedData?: (safevue_edge.Event.IFallDetectedData|null);

        /** Event geofenceEnteredData. */
        public geofenceEnteredData?: (safevue_edge.Event.IGeofenceEnteredData|null);

        /** Event data. */
        public data?: ("appStartUpData"|"fallDetectedData"|"geofenceEnteredData");

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: safevue_edge.IEvent): safevue_edge.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link safevue_edge.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link safevue_edge.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Event
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Event {

        /** Properties of an AppStartUpData. */
        interface IAppStartUpData {

            /** MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF] */
            watchMac?: (Uint8Array|null);

            /** AppStartUpData appVersion */
            appVersion?: (string|null);
        }

        /**
         * Publish app started event to `dt/watch/{watch-id}/evt`
         * e.g.,
         * Event {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * app_start_up_data = AppStartUpData {
         * watch_mac = [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
         * app_version = 1.0.0
         * }
         * }
         * }
         */
        class AppStartUpData implements IAppStartUpData {

            /**
             * Constructs a new AppStartUpData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Event.IAppStartUpData);

            /** MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF] */
            public watchMac: Uint8Array;

            /** AppStartUpData appVersion. */
            public appVersion: string;

            /**
             * Creates a new AppStartUpData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStartUpData instance
             */
            public static create(properties?: safevue_edge.Event.IAppStartUpData): safevue_edge.Event.AppStartUpData;

            /**
             * Encodes the specified AppStartUpData message. Does not implicitly {@link safevue_edge.Event.AppStartUpData.verify|verify} messages.
             * @param message AppStartUpData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Event.IAppStartUpData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStartUpData message, length delimited. Does not implicitly {@link safevue_edge.Event.AppStartUpData.verify|verify} messages.
             * @param message AppStartUpData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Event.IAppStartUpData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStartUpData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStartUpData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Event.AppStartUpData;

            /**
             * Decodes an AppStartUpData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStartUpData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Event.AppStartUpData;

            /**
             * Verifies an AppStartUpData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStartUpData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStartUpData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Event.AppStartUpData;

            /**
             * Creates a plain object from an AppStartUpData message. Also converts values to other types if specified.
             * @param message AppStartUpData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Event.AppStartUpData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStartUpData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStartUpData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FallDetectedData. */
        interface IFallDetectedData {

            /** FallDetectedData hasFallen */
            hasFallen?: (boolean|null);
        }

        /**
         * Publish fall detected event to `dt/watch/{watch-id}/evt`
         * e.g.,
         * Event {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * fall_detected_data = FallDetectedData {
         * has_fallen = True
         * }
         * }
         * }
         */
        class FallDetectedData implements IFallDetectedData {

            /**
             * Constructs a new FallDetectedData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Event.IFallDetectedData);

            /** FallDetectedData hasFallen. */
            public hasFallen: boolean;

            /**
             * Creates a new FallDetectedData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FallDetectedData instance
             */
            public static create(properties?: safevue_edge.Event.IFallDetectedData): safevue_edge.Event.FallDetectedData;

            /**
             * Encodes the specified FallDetectedData message. Does not implicitly {@link safevue_edge.Event.FallDetectedData.verify|verify} messages.
             * @param message FallDetectedData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Event.IFallDetectedData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FallDetectedData message, length delimited. Does not implicitly {@link safevue_edge.Event.FallDetectedData.verify|verify} messages.
             * @param message FallDetectedData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Event.IFallDetectedData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FallDetectedData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FallDetectedData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Event.FallDetectedData;

            /**
             * Decodes a FallDetectedData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FallDetectedData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Event.FallDetectedData;

            /**
             * Verifies a FallDetectedData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FallDetectedData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FallDetectedData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Event.FallDetectedData;

            /**
             * Creates a plain object from a FallDetectedData message. Also converts values to other types if specified.
             * @param message FallDetectedData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Event.FallDetectedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FallDetectedData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FallDetectedData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GeofenceEnteredData. */
        interface IGeofenceEnteredData {

            /** MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF] */
            beaconMacs?: (Uint8Array[]|null);
        }

        /**
         * Publish geofence entered event to `dt/watch/{watch-id}/evt`
         * e.g.,
         * Event {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * geofence_entered_data = GeofenceEnteredData {
         * beacon_macs = [
         * [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
         * ]
         * }
         * }
         * }
         */
        class GeofenceEnteredData implements IGeofenceEnteredData {

            /**
             * Constructs a new GeofenceEnteredData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Event.IGeofenceEnteredData);

            /** MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF] */
            public beaconMacs: Uint8Array[];

            /**
             * Creates a new GeofenceEnteredData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeofenceEnteredData instance
             */
            public static create(properties?: safevue_edge.Event.IGeofenceEnteredData): safevue_edge.Event.GeofenceEnteredData;

            /**
             * Encodes the specified GeofenceEnteredData message. Does not implicitly {@link safevue_edge.Event.GeofenceEnteredData.verify|verify} messages.
             * @param message GeofenceEnteredData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Event.IGeofenceEnteredData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeofenceEnteredData message, length delimited. Does not implicitly {@link safevue_edge.Event.GeofenceEnteredData.verify|verify} messages.
             * @param message GeofenceEnteredData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Event.IGeofenceEnteredData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeofenceEnteredData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeofenceEnteredData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Event.GeofenceEnteredData;

            /**
             * Decodes a GeofenceEnteredData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeofenceEnteredData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Event.GeofenceEnteredData;

            /**
             * Verifies a GeofenceEnteredData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeofenceEnteredData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeofenceEnteredData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Event.GeofenceEnteredData;

            /**
             * Creates a plain object from a GeofenceEnteredData message. Also converts values to other types if specified.
             * @param message GeofenceEnteredData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Event.GeofenceEnteredData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeofenceEnteredData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeofenceEnteredData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Sensor. */
    interface ISensor {

        /** API version */
        version?: (number|null);

        /** unix timestamp in seconds */
        timestamp?: (number|null);

        /** Sensor batteryData */
        batteryData?: (safevue_edge.Sensor.IBatteryData|null);

        /** Sensor beaconData */
        beaconData?: (safevue_edge.Sensor.IBeaconData|null);

        /** Sensor gpsData */
        gpsData?: (safevue_edge.Sensor.IGpsData|null);

        /** Sensor heartRateData */
        heartRateData?: (safevue_edge.Sensor.IHeartRateData|null);

        /** Sensor humidityData */
        humidityData?: (safevue_edge.Sensor.IHumidityData|null);

        /** Sensor noiseData */
        noiseData?: (safevue_edge.Sensor.INoiseData|null);

        /** Sensor screenData */
        screenData?: (safevue_edge.Sensor.IScreenData|null);

        /** Sensor stepsData */
        stepsData?: (safevue_edge.Sensor.IStepsData|null);

        /** Sensor temperatureData */
        temperatureData?: (safevue_edge.Sensor.ITemperatureData|null);

        /** Sensor wifiData */
        wifiData?: (safevue_edge.Sensor.IWifiData|null);
    }

    /** Represents a Sensor. */
    class Sensor implements ISensor {

        /**
         * Constructs a new Sensor.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.ISensor);

        /** API version */
        public version: number;

        /** unix timestamp in seconds */
        public timestamp: number;

        /** Sensor batteryData. */
        public batteryData?: (safevue_edge.Sensor.IBatteryData|null);

        /** Sensor beaconData. */
        public beaconData?: (safevue_edge.Sensor.IBeaconData|null);

        /** Sensor gpsData. */
        public gpsData?: (safevue_edge.Sensor.IGpsData|null);

        /** Sensor heartRateData. */
        public heartRateData?: (safevue_edge.Sensor.IHeartRateData|null);

        /** Sensor humidityData. */
        public humidityData?: (safevue_edge.Sensor.IHumidityData|null);

        /** Sensor noiseData. */
        public noiseData?: (safevue_edge.Sensor.INoiseData|null);

        /** Sensor screenData. */
        public screenData?: (safevue_edge.Sensor.IScreenData|null);

        /** Sensor stepsData. */
        public stepsData?: (safevue_edge.Sensor.IStepsData|null);

        /** Sensor temperatureData. */
        public temperatureData?: (safevue_edge.Sensor.ITemperatureData|null);

        /** Sensor wifiData. */
        public wifiData?: (safevue_edge.Sensor.IWifiData|null);

        /** Sensor data. */
        public data?: ("batteryData"|"beaconData"|"gpsData"|"heartRateData"|"humidityData"|"noiseData"|"screenData"|"stepsData"|"temperatureData"|"wifiData");

        /**
         * Creates a new Sensor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sensor instance
         */
        public static create(properties?: safevue_edge.ISensor): safevue_edge.Sensor;

        /**
         * Encodes the specified Sensor message. Does not implicitly {@link safevue_edge.Sensor.verify|verify} messages.
         * @param message Sensor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.ISensor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sensor message, length delimited. Does not implicitly {@link safevue_edge.Sensor.verify|verify} messages.
         * @param message Sensor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.ISensor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sensor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sensor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor;

        /**
         * Decodes a Sensor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sensor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor;

        /**
         * Verifies a Sensor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sensor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sensor
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor;

        /**
         * Creates a plain object from a Sensor message. Also converts values to other types if specified.
         * @param message Sensor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.Sensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sensor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Sensor
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Sensor {

        /** Properties of a BatteryData. */
        interface IBatteryData {

            /** battery level */
            level?: (number|null);

            /** battery temperature */
            temperature?: (number|null);

            /** BatteryData status */
            status?: (safevue_edge.Sensor.BatteryData.Status|null);
        }

        /**
         * Publish battery metrics to `dt/watch/{watch-id}/sensor/battery`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * battery_data = BatteryData {
         * level = 1.0
         * temperature = 30.5
         * status = DISCHARGING
         * }
         * }
         * }
         */
        class BatteryData implements IBatteryData {

            /**
             * Constructs a new BatteryData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IBatteryData);

            /** battery level */
            public level: number;

            /** battery temperature */
            public temperature: number;

            /** BatteryData status. */
            public status: safevue_edge.Sensor.BatteryData.Status;

            /**
             * Creates a new BatteryData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatteryData instance
             */
            public static create(properties?: safevue_edge.Sensor.IBatteryData): safevue_edge.Sensor.BatteryData;

            /**
             * Encodes the specified BatteryData message. Does not implicitly {@link safevue_edge.Sensor.BatteryData.verify|verify} messages.
             * @param message BatteryData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IBatteryData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatteryData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.BatteryData.verify|verify} messages.
             * @param message BatteryData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IBatteryData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatteryData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatteryData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.BatteryData;

            /**
             * Decodes a BatteryData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatteryData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.BatteryData;

            /**
             * Verifies a BatteryData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatteryData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatteryData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.BatteryData;

            /**
             * Creates a plain object from a BatteryData message. Also converts values to other types if specified.
             * @param message BatteryData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.BatteryData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatteryData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatteryData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BatteryData {

            /** Status enum. */
            enum Status {
                CHARGING = 0,
                DISCHARGING = 1,
                FULL = 2,
                NOT_CHARGING = 3,
                UNKNOWN = 4
            }
        }

        /** Properties of a BeaconData. */
        interface IBeaconData {

            /** MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF] */
            mac?: (Uint8Array[]|null);

            /** BeaconData rssi */
            rssi?: (number[]|null);

            /** BeaconData battery */
            battery?: (number[]|null);
        }

        /**
         * Publish detected beacons to `dt/watch/{watch-id}/sensor/beacon`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * beacon_data = BeaconData {
         * mac = [
         * [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0x00],
         * [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
         * ];
         * rssi = [-32, -48]
         * battery = [100, 100]
         * }
         * }
         * }
         */
        class BeaconData implements IBeaconData {

            /**
             * Constructs a new BeaconData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IBeaconData);

            /** MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF] */
            public mac: Uint8Array[];

            /** BeaconData rssi. */
            public rssi: number[];

            /** BeaconData battery. */
            public battery: number[];

            /**
             * Creates a new BeaconData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BeaconData instance
             */
            public static create(properties?: safevue_edge.Sensor.IBeaconData): safevue_edge.Sensor.BeaconData;

            /**
             * Encodes the specified BeaconData message. Does not implicitly {@link safevue_edge.Sensor.BeaconData.verify|verify} messages.
             * @param message BeaconData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IBeaconData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BeaconData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.BeaconData.verify|verify} messages.
             * @param message BeaconData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IBeaconData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BeaconData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BeaconData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.BeaconData;

            /**
             * Decodes a BeaconData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BeaconData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.BeaconData;

            /**
             * Verifies a BeaconData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BeaconData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BeaconData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.BeaconData;

            /**
             * Creates a plain object from a BeaconData message. Also converts values to other types if specified.
             * @param message BeaconData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.BeaconData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BeaconData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BeaconData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GpsData. */
        interface IGpsData {

            /** GpsData altitude */
            altitude?: (number|null);

            /** GpsData latitude */
            latitude?: (number|null);

            /** GpsData longitude */
            longitude?: (number|null);
        }

        /**
         * Publish GPS location to `dt/watch/{watch-id}/sensor/gps`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * gps_data = GpsData {
         * altitude = 0
         * latitude = 0
         * longitude = 0
         * }
         * }
         * }
         */
        class GpsData implements IGpsData {

            /**
             * Constructs a new GpsData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IGpsData);

            /** GpsData altitude. */
            public altitude: number;

            /** GpsData latitude. */
            public latitude: number;

            /** GpsData longitude. */
            public longitude: number;

            /**
             * Creates a new GpsData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GpsData instance
             */
            public static create(properties?: safevue_edge.Sensor.IGpsData): safevue_edge.Sensor.GpsData;

            /**
             * Encodes the specified GpsData message. Does not implicitly {@link safevue_edge.Sensor.GpsData.verify|verify} messages.
             * @param message GpsData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IGpsData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GpsData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.GpsData.verify|verify} messages.
             * @param message GpsData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IGpsData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GpsData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GpsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.GpsData;

            /**
             * Decodes a GpsData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GpsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.GpsData;

            /**
             * Verifies a GpsData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GpsData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GpsData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.GpsData;

            /**
             * Creates a plain object from a GpsData message. Also converts values to other types if specified.
             * @param message GpsData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.GpsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GpsData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GpsData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HeartRateData. */
        interface IHeartRateData {

            /** HeartRateData value */
            value?: (number|null);
        }

        /**
         * Publish heart rate measurement to `dt/watch/{watch-id}/sensor/heartrate`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * heart_rate_data = HeartRateData {
         * value = 60.0
         * }
         * }
         * }
         */
        class HeartRateData implements IHeartRateData {

            /**
             * Constructs a new HeartRateData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IHeartRateData);

            /** HeartRateData value. */
            public value: number;

            /**
             * Creates a new HeartRateData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HeartRateData instance
             */
            public static create(properties?: safevue_edge.Sensor.IHeartRateData): safevue_edge.Sensor.HeartRateData;

            /**
             * Encodes the specified HeartRateData message. Does not implicitly {@link safevue_edge.Sensor.HeartRateData.verify|verify} messages.
             * @param message HeartRateData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IHeartRateData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HeartRateData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.HeartRateData.verify|verify} messages.
             * @param message HeartRateData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IHeartRateData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HeartRateData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HeartRateData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.HeartRateData;

            /**
             * Decodes a HeartRateData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HeartRateData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.HeartRateData;

            /**
             * Verifies a HeartRateData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HeartRateData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HeartRateData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.HeartRateData;

            /**
             * Creates a plain object from a HeartRateData message. Also converts values to other types if specified.
             * @param message HeartRateData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.HeartRateData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HeartRateData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HeartRateData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HumidityData. */
        interface IHumidityData {

            /** HumidityData value */
            value?: (number|null);
        }

        /**
         * Publish humidity measurement to `dt/watch/{watch-id}/sensor/humidity`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * humidity_data = HumidityData {
         * value = 80.0
         * }
         * }
         * }
         */
        class HumidityData implements IHumidityData {

            /**
             * Constructs a new HumidityData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IHumidityData);

            /** HumidityData value. */
            public value: number;

            /**
             * Creates a new HumidityData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HumidityData instance
             */
            public static create(properties?: safevue_edge.Sensor.IHumidityData): safevue_edge.Sensor.HumidityData;

            /**
             * Encodes the specified HumidityData message. Does not implicitly {@link safevue_edge.Sensor.HumidityData.verify|verify} messages.
             * @param message HumidityData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IHumidityData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HumidityData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.HumidityData.verify|verify} messages.
             * @param message HumidityData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IHumidityData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HumidityData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HumidityData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.HumidityData;

            /**
             * Decodes a HumidityData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HumidityData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.HumidityData;

            /**
             * Verifies a HumidityData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HumidityData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HumidityData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.HumidityData;

            /**
             * Creates a plain object from a HumidityData message. Also converts values to other types if specified.
             * @param message HumidityData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.HumidityData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HumidityData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HumidityData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NoiseData. */
        interface INoiseData {

            /** NoiseData dBA */
            dBA?: (number|null);

            /** NoiseData dBZ */
            dBZ?: (number|null);
        }

        /**
         * Publish noise measurement to `dt/watch/{watch-id}/sensor/noise`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * noise_data = NoiseData {
         * dBA = -41
         * dBZ = -42
         * }
         * }
         * }
         */
        class NoiseData implements INoiseData {

            /**
             * Constructs a new NoiseData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.INoiseData);

            /** NoiseData dBA. */
            public dBA: number;

            /** NoiseData dBZ. */
            public dBZ: number;

            /**
             * Creates a new NoiseData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoiseData instance
             */
            public static create(properties?: safevue_edge.Sensor.INoiseData): safevue_edge.Sensor.NoiseData;

            /**
             * Encodes the specified NoiseData message. Does not implicitly {@link safevue_edge.Sensor.NoiseData.verify|verify} messages.
             * @param message NoiseData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.INoiseData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoiseData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.NoiseData.verify|verify} messages.
             * @param message NoiseData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.INoiseData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoiseData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NoiseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.NoiseData;

            /**
             * Decodes a NoiseData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NoiseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.NoiseData;

            /**
             * Verifies a NoiseData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoiseData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoiseData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.NoiseData;

            /**
             * Creates a plain object from a NoiseData message. Also converts values to other types if specified.
             * @param message NoiseData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.NoiseData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoiseData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NoiseData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScreenData. */
        interface IScreenData {

            /** screen on time in seconds since last collection */
            value?: (number|null);
        }

        /**
         * Publish screen metrics to `dt/watch/{watch-id}/sensor/screen`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * screen_data = ScreenData {
         * value = 10.5
         * }
         * }
         * }
         */
        class ScreenData implements IScreenData {

            /**
             * Constructs a new ScreenData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IScreenData);

            /** screen on time in seconds since last collection */
            public value: number;

            /**
             * Creates a new ScreenData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScreenData instance
             */
            public static create(properties?: safevue_edge.Sensor.IScreenData): safevue_edge.Sensor.ScreenData;

            /**
             * Encodes the specified ScreenData message. Does not implicitly {@link safevue_edge.Sensor.ScreenData.verify|verify} messages.
             * @param message ScreenData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IScreenData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScreenData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.ScreenData.verify|verify} messages.
             * @param message ScreenData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IScreenData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScreenData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScreenData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.ScreenData;

            /**
             * Decodes a ScreenData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScreenData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.ScreenData;

            /**
             * Verifies a ScreenData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScreenData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScreenData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.ScreenData;

            /**
             * Creates a plain object from a ScreenData message. Also converts values to other types if specified.
             * @param message ScreenData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.ScreenData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScreenData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScreenData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StepsData. */
        interface IStepsData {

            /** StepsData value */
            value?: (number|null);
        }

        /**
         * Publish steps measurement to `dt/watch/{watch-id}/sensor/steps`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * steps_data = StepsData {
         * value = 105
         * }
         * }
         * }
         */
        class StepsData implements IStepsData {

            /**
             * Constructs a new StepsData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IStepsData);

            /** StepsData value. */
            public value: number;

            /**
             * Creates a new StepsData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StepsData instance
             */
            public static create(properties?: safevue_edge.Sensor.IStepsData): safevue_edge.Sensor.StepsData;

            /**
             * Encodes the specified StepsData message. Does not implicitly {@link safevue_edge.Sensor.StepsData.verify|verify} messages.
             * @param message StepsData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IStepsData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StepsData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.StepsData.verify|verify} messages.
             * @param message StepsData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IStepsData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StepsData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StepsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.StepsData;

            /**
             * Decodes a StepsData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StepsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.StepsData;

            /**
             * Verifies a StepsData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StepsData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StepsData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.StepsData;

            /**
             * Creates a plain object from a StepsData message. Also converts values to other types if specified.
             * @param message StepsData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.StepsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StepsData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StepsData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TemperatureData. */
        interface ITemperatureData {

            /** TemperatureData value */
            value?: (number|null);
        }

        /**
         * Publish temperature measurement to `dt/watch/{watch-id}/sensor/temperature`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * temperature_data = TemperatureData {
         * value = 30.0
         * }
         * }
         * }
         */
        class TemperatureData implements ITemperatureData {

            /**
             * Constructs a new TemperatureData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.ITemperatureData);

            /** TemperatureData value. */
            public value: number;

            /**
             * Creates a new TemperatureData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TemperatureData instance
             */
            public static create(properties?: safevue_edge.Sensor.ITemperatureData): safevue_edge.Sensor.TemperatureData;

            /**
             * Encodes the specified TemperatureData message. Does not implicitly {@link safevue_edge.Sensor.TemperatureData.verify|verify} messages.
             * @param message TemperatureData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.ITemperatureData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TemperatureData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.TemperatureData.verify|verify} messages.
             * @param message TemperatureData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.ITemperatureData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TemperatureData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TemperatureData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.TemperatureData;

            /**
             * Decodes a TemperatureData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TemperatureData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.TemperatureData;

            /**
             * Verifies a TemperatureData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TemperatureData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TemperatureData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.TemperatureData;

            /**
             * Creates a plain object from a TemperatureData message. Also converts values to other types if specified.
             * @param message TemperatureData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.TemperatureData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TemperatureData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TemperatureData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WifiData. */
        interface IWifiData {

            /** WifiData bssid */
            bssid?: (string[]|null);

            /** WifiData rssi */
            rssi?: (number[]|null);
        }

        /**
         * Publish WiFi metrics to `dt/watch/{watch-id}/sensor/wifi`
         *
         * e.g.,
         * Sensor {
         * version = 1
         * timestamp = 1687856363
         * data = {
         * // top 3 strongest wifi
         * wifi_data = WifiData {
         * bssid = [
         * [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
         * ]
         * rssi = [-40]
         * }
         * }
         * }
         */
        class WifiData implements IWifiData {

            /**
             * Constructs a new WifiData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.Sensor.IWifiData);

            /** WifiData bssid. */
            public bssid: string[];

            /** WifiData rssi. */
            public rssi: number[];

            /**
             * Creates a new WifiData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WifiData instance
             */
            public static create(properties?: safevue_edge.Sensor.IWifiData): safevue_edge.Sensor.WifiData;

            /**
             * Encodes the specified WifiData message. Does not implicitly {@link safevue_edge.Sensor.WifiData.verify|verify} messages.
             * @param message WifiData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.Sensor.IWifiData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WifiData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.WifiData.verify|verify} messages.
             * @param message WifiData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.Sensor.IWifiData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WifiData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WifiData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.Sensor.WifiData;

            /**
             * Decodes a WifiData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WifiData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.Sensor.WifiData;

            /**
             * Verifies a WifiData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WifiData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WifiData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.Sensor.WifiData;

            /**
             * Creates a plain object from a WifiData message. Also converts values to other types if specified.
             * @param message WifiData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.Sensor.WifiData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WifiData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WifiData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SensorConfigData. */
    interface ISensorConfigData {

        /** SensorConfigData version */
        version?: (number|null);

        /** message sent timestamp; unix timestamp in seconds */
        timestamp?: (number|null);

        /** SensorConfigData configData */
        configData?: (safevue_edge.SensorConfigData.IConfigData|null);
    }

    /**
     * Current sensor config.
     *
     * Subscribe to `dt/edge/sensor/{sensor-type}/config` to get the current sensor config
     */
    class SensorConfigData implements ISensorConfigData {

        /**
         * Constructs a new SensorConfigData.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.ISensorConfigData);

        /** SensorConfigData version. */
        public version: number;

        /** message sent timestamp; unix timestamp in seconds */
        public timestamp: number;

        /** SensorConfigData configData. */
        public configData?: (safevue_edge.SensorConfigData.IConfigData|null);

        /**
         * Creates a new SensorConfigData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SensorConfigData instance
         */
        public static create(properties?: safevue_edge.ISensorConfigData): safevue_edge.SensorConfigData;

        /**
         * Encodes the specified SensorConfigData message. Does not implicitly {@link safevue_edge.SensorConfigData.verify|verify} messages.
         * @param message SensorConfigData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.ISensorConfigData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SensorConfigData message, length delimited. Does not implicitly {@link safevue_edge.SensorConfigData.verify|verify} messages.
         * @param message SensorConfigData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.ISensorConfigData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SensorConfigData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SensorConfigData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.SensorConfigData;

        /**
         * Decodes a SensorConfigData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SensorConfigData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.SensorConfigData;

        /**
         * Verifies a SensorConfigData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SensorConfigData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SensorConfigData
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.SensorConfigData;

        /**
         * Creates a plain object from a SensorConfigData message. Also converts values to other types if specified.
         * @param message SensorConfigData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.SensorConfigData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SensorConfigData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SensorConfigData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SensorConfigData {

        /** SensorType enum. */
        enum SensorType {
            UNKNOWN = 0,
            BATTERY = 1,
            BEACON = 2,
            GPS = 3,
            HEART_RATE = 4,
            HUMIDITY = 5,
            NOISE = 6,
            SCREEN = 7,
            STEPS = 8,
            TEMPERATURE = 9,
            WIFI = 10
        }

        /** Properties of a ConfigData. */
        interface IConfigData {

            /** ConfigData sensorType */
            sensorType?: (safevue_edge.SensorConfigData.SensorType|null);

            /** ConfigData readInterval */
            readInterval?: (number|null);
        }

        /** Represents a ConfigData. */
        class ConfigData implements IConfigData {

            /**
             * Constructs a new ConfigData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.SensorConfigData.IConfigData);

            /** ConfigData sensorType. */
            public sensorType: safevue_edge.SensorConfigData.SensorType;

            /** ConfigData readInterval. */
            public readInterval: number;

            /**
             * Creates a new ConfigData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConfigData instance
             */
            public static create(properties?: safevue_edge.SensorConfigData.IConfigData): safevue_edge.SensorConfigData.ConfigData;

            /**
             * Encodes the specified ConfigData message. Does not implicitly {@link safevue_edge.SensorConfigData.ConfigData.verify|verify} messages.
             * @param message ConfigData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.SensorConfigData.IConfigData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConfigData message, length delimited. Does not implicitly {@link safevue_edge.SensorConfigData.ConfigData.verify|verify} messages.
             * @param message ConfigData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.SensorConfigData.IConfigData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConfigData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConfigData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.SensorConfigData.ConfigData;

            /**
             * Decodes a ConfigData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConfigData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.SensorConfigData.ConfigData;

            /**
             * Verifies a ConfigData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConfigData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConfigData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.SensorConfigData.ConfigData;

            /**
             * Creates a plain object from a ConfigData message. Also converts values to other types if specified.
             * @param message ConfigData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.SensorConfigData.ConfigData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConfigData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConfigData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CrewAssistAckData. */
    interface ICrewAssistAckData {

        /** CrewAssistAckData version */
        version?: (number|null);

        /** message sent timestamp; unix timestamp in seconds */
        timestamp?: (number|null);

        /** CrewAssistAckData ackData */
        ackData?: (safevue_edge.CrewAssistAckData.IAckData|null);
    }

    /** Represents a CrewAssistAckData. */
    class CrewAssistAckData implements ICrewAssistAckData {

        /**
         * Constructs a new CrewAssistAckData.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.ICrewAssistAckData);

        /** CrewAssistAckData version. */
        public version: number;

        /** message sent timestamp; unix timestamp in seconds */
        public timestamp: number;

        /** CrewAssistAckData ackData. */
        public ackData?: (safevue_edge.CrewAssistAckData.IAckData|null);

        /** CrewAssistAckData data. */
        public data?: "ackData";

        /**
         * Creates a new CrewAssistAckData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrewAssistAckData instance
         */
        public static create(properties?: safevue_edge.ICrewAssistAckData): safevue_edge.CrewAssistAckData;

        /**
         * Encodes the specified CrewAssistAckData message. Does not implicitly {@link safevue_edge.CrewAssistAckData.verify|verify} messages.
         * @param message CrewAssistAckData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.ICrewAssistAckData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CrewAssistAckData message, length delimited. Does not implicitly {@link safevue_edge.CrewAssistAckData.verify|verify} messages.
         * @param message CrewAssistAckData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.ICrewAssistAckData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrewAssistAckData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrewAssistAckData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.CrewAssistAckData;

        /**
         * Decodes a CrewAssistAckData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CrewAssistAckData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.CrewAssistAckData;

        /**
         * Verifies a CrewAssistAckData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CrewAssistAckData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CrewAssistAckData
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.CrewAssistAckData;

        /**
         * Creates a plain object from a CrewAssistAckData message. Also converts values to other types if specified.
         * @param message CrewAssistAckData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.CrewAssistAckData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CrewAssistAckData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CrewAssistAckData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CrewAssistAckData {

        /** Properties of an AckData. */
        interface IAckData {

            /** Alert id */
            id?: (string|null);

            /** AckData acknowledgerId */
            acknowledgerId?: (string|null);

            /** AckData acknowledgerName */
            acknowledgerName?: (string|null);
        }

        /** Represents an AckData. */
        class AckData implements IAckData {

            /**
             * Constructs a new AckData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.CrewAssistAckData.IAckData);

            /** Alert id */
            public id: string;

            /** AckData acknowledgerId. */
            public acknowledgerId: string;

            /** AckData acknowledgerName. */
            public acknowledgerName: string;

            /**
             * Creates a new AckData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AckData instance
             */
            public static create(properties?: safevue_edge.CrewAssistAckData.IAckData): safevue_edge.CrewAssistAckData.AckData;

            /**
             * Encodes the specified AckData message. Does not implicitly {@link safevue_edge.CrewAssistAckData.AckData.verify|verify} messages.
             * @param message AckData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.CrewAssistAckData.IAckData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AckData message, length delimited. Does not implicitly {@link safevue_edge.CrewAssistAckData.AckData.verify|verify} messages.
             * @param message AckData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.CrewAssistAckData.IAckData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AckData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AckData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.CrewAssistAckData.AckData;

            /**
             * Decodes an AckData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AckData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.CrewAssistAckData.AckData;

            /**
             * Verifies an AckData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AckData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AckData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.CrewAssistAckData.AckData;

            /**
             * Creates a plain object from an AckData message. Also converts values to other types if specified.
             * @param message AckData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.CrewAssistAckData.AckData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AckData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AckData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an ActiveGeofenceData. */
    interface IActiveGeofenceData {

        /** ActiveGeofenceData version */
        version?: (number|null);

        /** message sent timestamp; unix timestamp in seconds */
        timestamp?: (number|null);

        /** ActiveGeofenceData geofenceData */
        geofenceData?: (safevue_edge.ActiveGeofenceData.IGeofenceData[]|null);
    }

    /** Represents an ActiveGeofenceData. */
    class ActiveGeofenceData implements IActiveGeofenceData {

        /**
         * Constructs a new ActiveGeofenceData.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.IActiveGeofenceData);

        /** ActiveGeofenceData version. */
        public version: number;

        /** message sent timestamp; unix timestamp in seconds */
        public timestamp: number;

        /** ActiveGeofenceData geofenceData. */
        public geofenceData: safevue_edge.ActiveGeofenceData.IGeofenceData[];

        /**
         * Creates a new ActiveGeofenceData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActiveGeofenceData instance
         */
        public static create(properties?: safevue_edge.IActiveGeofenceData): safevue_edge.ActiveGeofenceData;

        /**
         * Encodes the specified ActiveGeofenceData message. Does not implicitly {@link safevue_edge.ActiveGeofenceData.verify|verify} messages.
         * @param message ActiveGeofenceData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.IActiveGeofenceData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActiveGeofenceData message, length delimited. Does not implicitly {@link safevue_edge.ActiveGeofenceData.verify|verify} messages.
         * @param message ActiveGeofenceData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.IActiveGeofenceData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActiveGeofenceData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActiveGeofenceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.ActiveGeofenceData;

        /**
         * Decodes an ActiveGeofenceData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActiveGeofenceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.ActiveGeofenceData;

        /**
         * Verifies an ActiveGeofenceData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActiveGeofenceData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActiveGeofenceData
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.ActiveGeofenceData;

        /**
         * Creates a plain object from an ActiveGeofenceData message. Also converts values to other types if specified.
         * @param message ActiveGeofenceData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.ActiveGeofenceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActiveGeofenceData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ActiveGeofenceData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ActiveGeofenceData {

        /** Properties of a GeofenceData. */
        interface IGeofenceData {

            /** GeofenceData id */
            id?: (string|null);

            /** GeofenceData creatorId */
            creatorId?: (string|null);

            /** GeofenceData creatorName */
            creatorName?: (string|null);

            /** GeofenceData title */
            title?: (string|null);

            /** GeofenceData description */
            description?: (string|null);

            /** GeofenceData beaconMacs */
            beaconMacs?: (Uint8Array[]|null);

            /** GeofenceData allowedIds */
            allowedIds?: (string[]|null);
        }

        /** Represents a GeofenceData. */
        class GeofenceData implements IGeofenceData {

            /**
             * Constructs a new GeofenceData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.ActiveGeofenceData.IGeofenceData);

            /** GeofenceData id. */
            public id: string;

            /** GeofenceData creatorId. */
            public creatorId: string;

            /** GeofenceData creatorName. */
            public creatorName: string;

            /** GeofenceData title. */
            public title: string;

            /** GeofenceData description. */
            public description: string;

            /** GeofenceData beaconMacs. */
            public beaconMacs: Uint8Array[];

            /** GeofenceData allowedIds. */
            public allowedIds: string[];

            /**
             * Creates a new GeofenceData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeofenceData instance
             */
            public static create(properties?: safevue_edge.ActiveGeofenceData.IGeofenceData): safevue_edge.ActiveGeofenceData.GeofenceData;

            /**
             * Encodes the specified GeofenceData message. Does not implicitly {@link safevue_edge.ActiveGeofenceData.GeofenceData.verify|verify} messages.
             * @param message GeofenceData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.ActiveGeofenceData.IGeofenceData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeofenceData message, length delimited. Does not implicitly {@link safevue_edge.ActiveGeofenceData.GeofenceData.verify|verify} messages.
             * @param message GeofenceData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.ActiveGeofenceData.IGeofenceData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeofenceData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeofenceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.ActiveGeofenceData.GeofenceData;

            /**
             * Decodes a GeofenceData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeofenceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.ActiveGeofenceData.GeofenceData;

            /**
             * Verifies a GeofenceData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeofenceData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeofenceData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.ActiveGeofenceData.GeofenceData;

            /**
             * Creates a plain object from a GeofenceData message. Also converts values to other types if specified.
             * @param message GeofenceData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.ActiveGeofenceData.GeofenceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeofenceData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeofenceData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BroadcastMessageData. */
    interface IBroadcastMessageData {

        /** BroadcastMessageData version */
        version?: (number|null);

        /** message sent timestamp; unix timestamp in seconds */
        timestamp?: (number|null);

        /** BroadcastMessageData messageData */
        messageData?: (safevue_edge.BroadcastMessageData.IMessageData|null);
    }

    /** Represents a BroadcastMessageData. */
    class BroadcastMessageData implements IBroadcastMessageData {

        /**
         * Constructs a new BroadcastMessageData.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.IBroadcastMessageData);

        /** BroadcastMessageData version. */
        public version: number;

        /** message sent timestamp; unix timestamp in seconds */
        public timestamp: number;

        /** BroadcastMessageData messageData. */
        public messageData?: (safevue_edge.BroadcastMessageData.IMessageData|null);

        /** BroadcastMessageData data. */
        public data?: "messageData";

        /**
         * Creates a new BroadcastMessageData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastMessageData instance
         */
        public static create(properties?: safevue_edge.IBroadcastMessageData): safevue_edge.BroadcastMessageData;

        /**
         * Encodes the specified BroadcastMessageData message. Does not implicitly {@link safevue_edge.BroadcastMessageData.verify|verify} messages.
         * @param message BroadcastMessageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.IBroadcastMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastMessageData message, length delimited. Does not implicitly {@link safevue_edge.BroadcastMessageData.verify|verify} messages.
         * @param message BroadcastMessageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.IBroadcastMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastMessageData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastMessageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.BroadcastMessageData;

        /**
         * Decodes a BroadcastMessageData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastMessageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.BroadcastMessageData;

        /**
         * Verifies a BroadcastMessageData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastMessageData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastMessageData
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.BroadcastMessageData;

        /**
         * Creates a plain object from a BroadcastMessageData message. Also converts values to other types if specified.
         * @param message BroadcastMessageData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.BroadcastMessageData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastMessageData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BroadcastMessageData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BroadcastMessageData {

        /** Properties of a MessageData. */
        interface IMessageData {

            /** MessageData id */
            id?: (string|null);

            /** MessageData senderId */
            senderId?: (string|null);

            /** MessageData senderName */
            senderName?: (string|null);

            /** MessageData message */
            message?: (string|null);
        }

        /** Represents a MessageData. */
        class MessageData implements IMessageData {

            /**
             * Constructs a new MessageData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.BroadcastMessageData.IMessageData);

            /** MessageData id. */
            public id: string;

            /** MessageData senderId. */
            public senderId: string;

            /** MessageData senderName. */
            public senderName: string;

            /** MessageData message. */
            public message: string;

            /**
             * Creates a new MessageData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageData instance
             */
            public static create(properties?: safevue_edge.BroadcastMessageData.IMessageData): safevue_edge.BroadcastMessageData.MessageData;

            /**
             * Encodes the specified MessageData message. Does not implicitly {@link safevue_edge.BroadcastMessageData.MessageData.verify|verify} messages.
             * @param message MessageData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.BroadcastMessageData.IMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageData message, length delimited. Does not implicitly {@link safevue_edge.BroadcastMessageData.MessageData.verify|verify} messages.
             * @param message MessageData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.BroadcastMessageData.IMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.BroadcastMessageData.MessageData;

            /**
             * Decodes a MessageData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.BroadcastMessageData.MessageData;

            /**
             * Verifies a MessageData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.BroadcastMessageData.MessageData;

            /**
             * Creates a plain object from a MessageData message. Also converts values to other types if specified.
             * @param message MessageData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.BroadcastMessageData.MessageData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CurrentUserData. */
    interface ICurrentUserData {

        /** CurrentUserData version */
        version?: (number|null);

        /** message sent timestamp; unix timestamp in seconds */
        timestamp?: (number|null);

        /** `user_data` will be empty if the watch is not assigned to any user. */
        userData?: (safevue_edge.CurrentUserData.IUserData|null);
    }

    /**
     * Current watch user.
     *
     * Subscribe to `dt/watch/{watchId}/user` to get the current user for the device
     */
    class CurrentUserData implements ICurrentUserData {

        /**
         * Constructs a new CurrentUserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.ICurrentUserData);

        /** CurrentUserData version. */
        public version: number;

        /** message sent timestamp; unix timestamp in seconds */
        public timestamp: number;

        /** `user_data` will be empty if the watch is not assigned to any user. */
        public userData?: (safevue_edge.CurrentUserData.IUserData|null);

        /** CurrentUserData _userData. */
        public _userData?: "userData";

        /**
         * Creates a new CurrentUserData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrentUserData instance
         */
        public static create(properties?: safevue_edge.ICurrentUserData): safevue_edge.CurrentUserData;

        /**
         * Encodes the specified CurrentUserData message. Does not implicitly {@link safevue_edge.CurrentUserData.verify|verify} messages.
         * @param message CurrentUserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.ICurrentUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrentUserData message, length delimited. Does not implicitly {@link safevue_edge.CurrentUserData.verify|verify} messages.
         * @param message CurrentUserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.ICurrentUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrentUserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrentUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.CurrentUserData;

        /**
         * Decodes a CurrentUserData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrentUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.CurrentUserData;

        /**
         * Verifies a CurrentUserData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrentUserData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrentUserData
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.CurrentUserData;

        /**
         * Creates a plain object from a CurrentUserData message. Also converts values to other types if specified.
         * @param message CurrentUserData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.CurrentUserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrentUserData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CurrentUserData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CurrentUserData {

        /** Properties of a UserData. */
        interface IUserData {

            /** UserData userId */
            userId?: (string|null);

            /** UserData userName */
            userName?: (string|null);

            /** date of birth; 1970-12-31 will be encoded as 19701231 */
            dob?: (number|null);
        }

        /** Represents a UserData. */
        class UserData implements IUserData {

            /**
             * Constructs a new UserData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.CurrentUserData.IUserData);

            /** UserData userId. */
            public userId: string;

            /** UserData userName. */
            public userName: string;

            /** date of birth; 1970-12-31 will be encoded as 19701231 */
            public dob: number;

            /**
             * Creates a new UserData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserData instance
             */
            public static create(properties?: safevue_edge.CurrentUserData.IUserData): safevue_edge.CurrentUserData.UserData;

            /**
             * Encodes the specified UserData message. Does not implicitly {@link safevue_edge.CurrentUserData.UserData.verify|verify} messages.
             * @param message UserData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.CurrentUserData.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserData message, length delimited. Does not implicitly {@link safevue_edge.CurrentUserData.UserData.verify|verify} messages.
             * @param message UserData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.CurrentUserData.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.CurrentUserData.UserData;

            /**
             * Decodes a UserData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.CurrentUserData.UserData;

            /**
             * Verifies a UserData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.CurrentUserData.UserData;

            /**
             * Creates a plain object from a UserData message. Also converts values to other types if specified.
             * @param message UserData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.CurrentUserData.UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an EdgeTimeData. */
    interface IEdgeTimeData {

        /** EdgeTimeData version */
        version?: (number|null);

        /** EdgeTimeData timeData */
        timeData?: (safevue_edge.EdgeTimeData.ITimeData|null);
    }

    /**
     * Current server time.
     *
     * This is updated every 5 seconds.
     *
     * Data topic: `dt/edge/time`
     */
    class EdgeTimeData implements IEdgeTimeData {

        /**
         * Constructs a new EdgeTimeData.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.IEdgeTimeData);

        /** EdgeTimeData version. */
        public version: number;

        /** EdgeTimeData timeData. */
        public timeData?: (safevue_edge.EdgeTimeData.ITimeData|null);

        /** EdgeTimeData data. */
        public data?: "timeData";

        /**
         * Creates a new EdgeTimeData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EdgeTimeData instance
         */
        public static create(properties?: safevue_edge.IEdgeTimeData): safevue_edge.EdgeTimeData;

        /**
         * Encodes the specified EdgeTimeData message. Does not implicitly {@link safevue_edge.EdgeTimeData.verify|verify} messages.
         * @param message EdgeTimeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.IEdgeTimeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EdgeTimeData message, length delimited. Does not implicitly {@link safevue_edge.EdgeTimeData.verify|verify} messages.
         * @param message EdgeTimeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.IEdgeTimeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EdgeTimeData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EdgeTimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.EdgeTimeData;

        /**
         * Decodes an EdgeTimeData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EdgeTimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.EdgeTimeData;

        /**
         * Verifies an EdgeTimeData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EdgeTimeData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EdgeTimeData
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.EdgeTimeData;

        /**
         * Creates a plain object from an EdgeTimeData message. Also converts values to other types if specified.
         * @param message EdgeTimeData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.EdgeTimeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EdgeTimeData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EdgeTimeData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace EdgeTimeData {

        /** Properties of a TimeData. */
        interface ITimeData {

            /** unix timestamp in seconds */
            timestamp?: (number|null);

            /** TimeData utcOffset */
            utcOffset?: (number|null);
        }

        /** Represents a TimeData. */
        class TimeData implements ITimeData {

            /**
             * Constructs a new TimeData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.EdgeTimeData.ITimeData);

            /** unix timestamp in seconds */
            public timestamp: number;

            /** TimeData utcOffset. */
            public utcOffset: number;

            /**
             * Creates a new TimeData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeData instance
             */
            public static create(properties?: safevue_edge.EdgeTimeData.ITimeData): safevue_edge.EdgeTimeData.TimeData;

            /**
             * Encodes the specified TimeData message. Does not implicitly {@link safevue_edge.EdgeTimeData.TimeData.verify|verify} messages.
             * @param message TimeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.EdgeTimeData.ITimeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeData message, length delimited. Does not implicitly {@link safevue_edge.EdgeTimeData.TimeData.verify|verify} messages.
             * @param message TimeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.EdgeTimeData.ITimeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.EdgeTimeData.TimeData;

            /**
             * Decodes a TimeData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.EdgeTimeData.TimeData;

            /**
             * Verifies a TimeData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.EdgeTimeData.TimeData;

            /**
             * Creates a plain object from a TimeData message. Also converts values to other types if specified.
             * @param message TimeData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.EdgeTimeData.TimeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an AppVersionData. */
    interface IAppVersionData {

        /** AppVersionData version */
        version?: (number|null);

        /** message sent timestamp; unix timestamp in seconds */
        timestamp?: (number|null);

        /** AppVersionData versionData */
        versionData?: (safevue_edge.AppVersionData.IVersionData|null);
    }

    /**
     * Current watch app version
     *
     * Published every server startup
     *
     * Data topic: `dt/edge/app/version`
     */
    class AppVersionData implements IAppVersionData {

        /**
         * Constructs a new AppVersionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: safevue_edge.IAppVersionData);

        /** AppVersionData version. */
        public version: number;

        /** message sent timestamp; unix timestamp in seconds */
        public timestamp: number;

        /** AppVersionData versionData. */
        public versionData?: (safevue_edge.AppVersionData.IVersionData|null);

        /** AppVersionData data. */
        public data?: "versionData";

        /**
         * Creates a new AppVersionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppVersionData instance
         */
        public static create(properties?: safevue_edge.IAppVersionData): safevue_edge.AppVersionData;

        /**
         * Encodes the specified AppVersionData message. Does not implicitly {@link safevue_edge.AppVersionData.verify|verify} messages.
         * @param message AppVersionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: safevue_edge.IAppVersionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppVersionData message, length delimited. Does not implicitly {@link safevue_edge.AppVersionData.verify|verify} messages.
         * @param message AppVersionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: safevue_edge.IAppVersionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppVersionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppVersionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.AppVersionData;

        /**
         * Decodes an AppVersionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppVersionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.AppVersionData;

        /**
         * Verifies an AppVersionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppVersionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppVersionData
         */
        public static fromObject(object: { [k: string]: any }): safevue_edge.AppVersionData;

        /**
         * Creates a plain object from an AppVersionData message. Also converts values to other types if specified.
         * @param message AppVersionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: safevue_edge.AppVersionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppVersionData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AppVersionData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AppVersionData {

        /** Properties of a VersionData. */
        interface IVersionData {

            /** App package name */
            name?: (string|null);

            /** App version */
            version?: (string|null);

            /** App version code */
            versionCode?: (string|null);

            /** VersionData apkUrl */
            apkUrl?: (string|null);
        }

        /** Represents a VersionData. */
        class VersionData implements IVersionData {

            /**
             * Constructs a new VersionData.
             * @param [properties] Properties to set
             */
            constructor(properties?: safevue_edge.AppVersionData.IVersionData);

            /** App package name */
            public name: string;

            /** App version */
            public version: string;

            /** App version code */
            public versionCode: string;

            /** VersionData apkUrl. */
            public apkUrl: string;

            /**
             * Creates a new VersionData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VersionData instance
             */
            public static create(properties?: safevue_edge.AppVersionData.IVersionData): safevue_edge.AppVersionData.VersionData;

            /**
             * Encodes the specified VersionData message. Does not implicitly {@link safevue_edge.AppVersionData.VersionData.verify|verify} messages.
             * @param message VersionData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: safevue_edge.AppVersionData.IVersionData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VersionData message, length delimited. Does not implicitly {@link safevue_edge.AppVersionData.VersionData.verify|verify} messages.
             * @param message VersionData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: safevue_edge.AppVersionData.IVersionData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VersionData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VersionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): safevue_edge.AppVersionData.VersionData;

            /**
             * Decodes a VersionData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VersionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): safevue_edge.AppVersionData.VersionData;

            /**
             * Verifies a VersionData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VersionData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VersionData
             */
            public static fromObject(object: { [k: string]: any }): safevue_edge.AppVersionData.VersionData;

            /**
             * Creates a plain object from a VersionData message. Also converts values to other types if specified.
             * @param message VersionData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: safevue_edge.AppVersionData.VersionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VersionData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VersionData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
