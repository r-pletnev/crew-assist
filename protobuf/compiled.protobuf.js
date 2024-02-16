/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.safevue_edge = (function() {

    /**
     * Namespace safevue_edge.
     * @exports safevue_edge
     * @namespace
     */
    var safevue_edge = {};

    safevue_edge.Command = (function() {

        /**
         * Properties of a Command.
         * @memberof safevue_edge
         * @interface ICommand
         * @property {number|null} [version] API version; set to 1
         * @property {number|null} [timestamp] unix timestamp in seconds
         * @property {string|null} [resTopic] response topic i.e. where the requester is listening for response
         * @property {safevue_edge.Command.ICrewAssistData|null} [crewAssistData] Command crewAssistData
         */

        /**
         * Constructs a new Command.
         * @memberof safevue_edge
         * @classdesc Represents a Command.
         * @implements ICommand
         * @constructor
         * @param {safevue_edge.ICommand=} [properties] Properties to set
         */
        function Command(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * API version; set to 1
         * @member {number} version
         * @memberof safevue_edge.Command
         * @instance
         */
        Command.prototype.version = 0;

        /**
         * unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.Command
         * @instance
         */
        Command.prototype.timestamp = 0;

        /**
         * response topic i.e. where the requester is listening for response
         * @member {string} resTopic
         * @memberof safevue_edge.Command
         * @instance
         */
        Command.prototype.resTopic = "";

        /**
         * Command crewAssistData.
         * @member {safevue_edge.Command.ICrewAssistData|null|undefined} crewAssistData
         * @memberof safevue_edge.Command
         * @instance
         */
        Command.prototype.crewAssistData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Command data.
         * @member {"crewAssistData"|undefined} data
         * @memberof safevue_edge.Command
         * @instance
         */
        Object.defineProperty(Command.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["crewAssistData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Command instance using the specified properties.
         * @function create
         * @memberof safevue_edge.Command
         * @static
         * @param {safevue_edge.ICommand=} [properties] Properties to set
         * @returns {safevue_edge.Command} Command instance
         */
        Command.create = function create(properties) {
            return new Command(properties);
        };

        /**
         * Encodes the specified Command message. Does not implicitly {@link safevue_edge.Command.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.Command
         * @static
         * @param {safevue_edge.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.resTopic != null && Object.hasOwnProperty.call(message, "resTopic"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resTopic);
            if (message.crewAssistData != null && Object.hasOwnProperty.call(message, "crewAssistData"))
                $root.safevue_edge.Command.CrewAssistData.encode(message.crewAssistData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link safevue_edge.Command.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.Command
         * @static
         * @param {safevue_edge.ICommand} message Command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Command.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Command();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.resTopic = reader.string();
                        break;
                    }
                case 4: {
                        message.crewAssistData = $root.safevue_edge.Command.CrewAssistData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Command message.
         * @function verify
         * @memberof safevue_edge.Command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Command.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.resTopic != null && message.hasOwnProperty("resTopic"))
                if (!$util.isString(message.resTopic))
                    return "resTopic: string expected";
            if (message.crewAssistData != null && message.hasOwnProperty("crewAssistData")) {
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Command.CrewAssistData.verify(message.crewAssistData);
                    if (error)
                        return "crewAssistData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.Command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.Command} Command
         */
        Command.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.Command)
                return object;
            var message = new $root.safevue_edge.Command();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.resTopic != null)
                message.resTopic = String(object.resTopic);
            if (object.crewAssistData != null) {
                if (typeof object.crewAssistData !== "object")
                    throw TypeError(".safevue_edge.Command.crewAssistData: object expected");
                message.crewAssistData = $root.safevue_edge.Command.CrewAssistData.fromObject(object.crewAssistData);
            }
            return message;
        };

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.Command
         * @static
         * @param {safevue_edge.Command} message Command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
                object.resTopic = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.resTopic != null && message.hasOwnProperty("resTopic"))
                object.resTopic = message.resTopic;
            if (message.crewAssistData != null && message.hasOwnProperty("crewAssistData")) {
                object.crewAssistData = $root.safevue_edge.Command.CrewAssistData.toObject(message.crewAssistData, options);
                if (options.oneofs)
                    object.data = "crewAssistData";
            }
            return object;
        };

        /**
         * Converts this Command to JSON.
         * @function toJSON
         * @memberof safevue_edge.Command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Command
         * @function getTypeUrl
         * @memberof safevue_edge.Command
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Command.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.Command";
        };

        Command.CrewAssistData = (function() {

            /**
             * Properties of a CrewAssistData.
             * @memberof safevue_edge.Command
             * @interface ICrewAssistData
             * @property {safevue_edge.Command.CrewAssistData.Trigger|null} [trigger] CrewAssistData trigger
             */

            /**
             * Constructs a new CrewAssistData.
             * @memberof safevue_edge.Command
             * @classdesc Represents a CrewAssistData.
             * @implements ICrewAssistData
             * @constructor
             * @param {safevue_edge.Command.ICrewAssistData=} [properties] Properties to set
             */
            function CrewAssistData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CrewAssistData trigger.
             * @member {safevue_edge.Command.CrewAssistData.Trigger} trigger
             * @memberof safevue_edge.Command.CrewAssistData
             * @instance
             */
            CrewAssistData.prototype.trigger = 0;

            /**
             * Creates a new CrewAssistData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {safevue_edge.Command.ICrewAssistData=} [properties] Properties to set
             * @returns {safevue_edge.Command.CrewAssistData} CrewAssistData instance
             */
            CrewAssistData.create = function create(properties) {
                return new CrewAssistData(properties);
            };

            /**
             * Encodes the specified CrewAssistData message. Does not implicitly {@link safevue_edge.Command.CrewAssistData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {safevue_edge.Command.ICrewAssistData} message CrewAssistData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CrewAssistData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.trigger != null && Object.hasOwnProperty.call(message, "trigger"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.trigger);
                return writer;
            };

            /**
             * Encodes the specified CrewAssistData message, length delimited. Does not implicitly {@link safevue_edge.Command.CrewAssistData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {safevue_edge.Command.ICrewAssistData} message CrewAssistData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CrewAssistData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CrewAssistData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Command.CrewAssistData} CrewAssistData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CrewAssistData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Command.CrewAssistData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.trigger = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CrewAssistData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Command.CrewAssistData} CrewAssistData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CrewAssistData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CrewAssistData message.
             * @function verify
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CrewAssistData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.trigger != null && message.hasOwnProperty("trigger"))
                    switch (message.trigger) {
                    default:
                        return "trigger: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a CrewAssistData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Command.CrewAssistData} CrewAssistData
             */
            CrewAssistData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Command.CrewAssistData)
                    return object;
                var message = new $root.safevue_edge.Command.CrewAssistData();
                switch (object.trigger) {
                default:
                    if (typeof object.trigger === "number") {
                        message.trigger = object.trigger;
                        break;
                    }
                    break;
                case "MANUAL":
                case 0:
                    message.trigger = 0;
                    break;
                case "DISMISS":
                case 1:
                    message.trigger = 1;
                    break;
                case "FALL":
                case 2:
                    message.trigger = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a CrewAssistData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {safevue_edge.Command.CrewAssistData} message CrewAssistData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CrewAssistData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.trigger = options.enums === String ? "MANUAL" : 0;
                if (message.trigger != null && message.hasOwnProperty("trigger"))
                    object.trigger = options.enums === String ? $root.safevue_edge.Command.CrewAssistData.Trigger[message.trigger] === undefined ? message.trigger : $root.safevue_edge.Command.CrewAssistData.Trigger[message.trigger] : message.trigger;
                return object;
            };

            /**
             * Converts this CrewAssistData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Command.CrewAssistData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CrewAssistData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CrewAssistData
             * @function getTypeUrl
             * @memberof safevue_edge.Command.CrewAssistData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CrewAssistData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Command.CrewAssistData";
            };

            /**
             * Trigger enum.
             * @name safevue_edge.Command.CrewAssistData.Trigger
             * @enum {number}
             * @property {number} MANUAL=0 Crew assist triggered manually
             * @property {number} DISMISS=1 Dismiss previously triggered crew assist
             * @property {number} FALL=2 Crew assist triggered automatically due to a suspected fall
             */
            CrewAssistData.Trigger = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MANUAL"] = 0;
                values[valuesById[1] = "DISMISS"] = 1;
                values[valuesById[2] = "FALL"] = 2;
                return values;
            })();

            return CrewAssistData;
        })();

        return Command;
    })();

    safevue_edge.CommandResponse = (function() {

        /**
         * Properties of a CommandResponse.
         * @memberof safevue_edge
         * @interface ICommandResponse
         * @property {number|null} [version] API version
         * @property {number|null} [timestamp] unix timestamp in seconds from Command request
         * @property {boolean|null} [success] True if successful, False otherwise
         * @property {string|null} [message] error message if `success` is False
         */

        /**
         * Constructs a new CommandResponse.
         * @memberof safevue_edge
         * @classdesc Represents a CommandResponse.
         * @implements ICommandResponse
         * @constructor
         * @param {safevue_edge.ICommandResponse=} [properties] Properties to set
         */
        function CommandResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * API version
         * @member {number} version
         * @memberof safevue_edge.CommandResponse
         * @instance
         */
        CommandResponse.prototype.version = 0;

        /**
         * unix timestamp in seconds from Command request
         * @member {number} timestamp
         * @memberof safevue_edge.CommandResponse
         * @instance
         */
        CommandResponse.prototype.timestamp = 0;

        /**
         * True if successful, False otherwise
         * @member {boolean} success
         * @memberof safevue_edge.CommandResponse
         * @instance
         */
        CommandResponse.prototype.success = false;

        /**
         * error message if `success` is False
         * @member {string} message
         * @memberof safevue_edge.CommandResponse
         * @instance
         */
        CommandResponse.prototype.message = "";

        /**
         * Creates a new CommandResponse instance using the specified properties.
         * @function create
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {safevue_edge.ICommandResponse=} [properties] Properties to set
         * @returns {safevue_edge.CommandResponse} CommandResponse instance
         */
        CommandResponse.create = function create(properties) {
            return new CommandResponse(properties);
        };

        /**
         * Encodes the specified CommandResponse message. Does not implicitly {@link safevue_edge.CommandResponse.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {safevue_edge.ICommandResponse} message CommandResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified CommandResponse message, length delimited. Does not implicitly {@link safevue_edge.CommandResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {safevue_edge.ICommandResponse} message CommandResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommandResponse message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.CommandResponse} CommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.CommandResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.success = reader.bool();
                        break;
                    }
                case 4: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommandResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.CommandResponse} CommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommandResponse message.
         * @function verify
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommandResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a CommandResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.CommandResponse} CommandResponse
         */
        CommandResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.CommandResponse)
                return object;
            var message = new $root.safevue_edge.CommandResponse();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a CommandResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {safevue_edge.CommandResponse} message CommandResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
                object.success = false;
                object.message = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this CommandResponse to JSON.
         * @function toJSON
         * @memberof safevue_edge.CommandResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommandResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommandResponse
         * @function getTypeUrl
         * @memberof safevue_edge.CommandResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommandResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.CommandResponse";
        };

        return CommandResponse;
    })();

    safevue_edge.Event = (function() {

        /**
         * Properties of an Event.
         * @memberof safevue_edge
         * @interface IEvent
         * @property {number|null} [version] Event version
         * @property {number|null} [timestamp] message sent timestamp; unix timestamp in seconds
         * @property {safevue_edge.Event.IAppStartUpData|null} [appStartUpData] Event appStartUpData
         * @property {safevue_edge.Event.IFallDetectedData|null} [fallDetectedData] Event fallDetectedData
         * @property {safevue_edge.Event.IGeofenceEnteredData|null} [geofenceEnteredData] Event geofenceEnteredData
         */

        /**
         * Constructs a new Event.
         * @memberof safevue_edge
         * @classdesc Represents an Event.
         * @implements IEvent
         * @constructor
         * @param {safevue_edge.IEvent=} [properties] Properties to set
         */
        function Event(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Event version.
         * @member {number} version
         * @memberof safevue_edge.Event
         * @instance
         */
        Event.prototype.version = 0;

        /**
         * message sent timestamp; unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.Event
         * @instance
         */
        Event.prototype.timestamp = 0;

        /**
         * Event appStartUpData.
         * @member {safevue_edge.Event.IAppStartUpData|null|undefined} appStartUpData
         * @memberof safevue_edge.Event
         * @instance
         */
        Event.prototype.appStartUpData = null;

        /**
         * Event fallDetectedData.
         * @member {safevue_edge.Event.IFallDetectedData|null|undefined} fallDetectedData
         * @memberof safevue_edge.Event
         * @instance
         */
        Event.prototype.fallDetectedData = null;

        /**
         * Event geofenceEnteredData.
         * @member {safevue_edge.Event.IGeofenceEnteredData|null|undefined} geofenceEnteredData
         * @memberof safevue_edge.Event
         * @instance
         */
        Event.prototype.geofenceEnteredData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Event data.
         * @member {"appStartUpData"|"fallDetectedData"|"geofenceEnteredData"|undefined} data
         * @memberof safevue_edge.Event
         * @instance
         */
        Object.defineProperty(Event.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["appStartUpData", "fallDetectedData", "geofenceEnteredData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Event instance using the specified properties.
         * @function create
         * @memberof safevue_edge.Event
         * @static
         * @param {safevue_edge.IEvent=} [properties] Properties to set
         * @returns {safevue_edge.Event} Event instance
         */
        Event.create = function create(properties) {
            return new Event(properties);
        };

        /**
         * Encodes the specified Event message. Does not implicitly {@link safevue_edge.Event.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.Event
         * @static
         * @param {safevue_edge.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.appStartUpData != null && Object.hasOwnProperty.call(message, "appStartUpData"))
                $root.safevue_edge.Event.AppStartUpData.encode(message.appStartUpData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.fallDetectedData != null && Object.hasOwnProperty.call(message, "fallDetectedData"))
                $root.safevue_edge.Event.FallDetectedData.encode(message.fallDetectedData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.geofenceEnteredData != null && Object.hasOwnProperty.call(message, "geofenceEnteredData"))
                $root.safevue_edge.Event.GeofenceEnteredData.encode(message.geofenceEnteredData, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link safevue_edge.Event.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.Event
         * @static
         * @param {safevue_edge.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Event();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.appStartUpData = $root.safevue_edge.Event.AppStartUpData.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.fallDetectedData = $root.safevue_edge.Event.FallDetectedData.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.geofenceEnteredData = $root.safevue_edge.Event.GeofenceEnteredData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Event message.
         * @function verify
         * @memberof safevue_edge.Event
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Event.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.appStartUpData != null && message.hasOwnProperty("appStartUpData")) {
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Event.AppStartUpData.verify(message.appStartUpData);
                    if (error)
                        return "appStartUpData." + error;
                }
            }
            if (message.fallDetectedData != null && message.hasOwnProperty("fallDetectedData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Event.FallDetectedData.verify(message.fallDetectedData);
                    if (error)
                        return "fallDetectedData." + error;
                }
            }
            if (message.geofenceEnteredData != null && message.hasOwnProperty("geofenceEnteredData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Event.GeofenceEnteredData.verify(message.geofenceEnteredData);
                    if (error)
                        return "geofenceEnteredData." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.Event
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.Event} Event
         */
        Event.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.Event)
                return object;
            var message = new $root.safevue_edge.Event();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.appStartUpData != null) {
                if (typeof object.appStartUpData !== "object")
                    throw TypeError(".safevue_edge.Event.appStartUpData: object expected");
                message.appStartUpData = $root.safevue_edge.Event.AppStartUpData.fromObject(object.appStartUpData);
            }
            if (object.fallDetectedData != null) {
                if (typeof object.fallDetectedData !== "object")
                    throw TypeError(".safevue_edge.Event.fallDetectedData: object expected");
                message.fallDetectedData = $root.safevue_edge.Event.FallDetectedData.fromObject(object.fallDetectedData);
            }
            if (object.geofenceEnteredData != null) {
                if (typeof object.geofenceEnteredData !== "object")
                    throw TypeError(".safevue_edge.Event.geofenceEnteredData: object expected");
                message.geofenceEnteredData = $root.safevue_edge.Event.GeofenceEnteredData.fromObject(object.geofenceEnteredData);
            }
            return message;
        };

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.Event
         * @static
         * @param {safevue_edge.Event} message Event
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Event.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.appStartUpData != null && message.hasOwnProperty("appStartUpData")) {
                object.appStartUpData = $root.safevue_edge.Event.AppStartUpData.toObject(message.appStartUpData, options);
                if (options.oneofs)
                    object.data = "appStartUpData";
            }
            if (message.fallDetectedData != null && message.hasOwnProperty("fallDetectedData")) {
                object.fallDetectedData = $root.safevue_edge.Event.FallDetectedData.toObject(message.fallDetectedData, options);
                if (options.oneofs)
                    object.data = "fallDetectedData";
            }
            if (message.geofenceEnteredData != null && message.hasOwnProperty("geofenceEnteredData")) {
                object.geofenceEnteredData = $root.safevue_edge.Event.GeofenceEnteredData.toObject(message.geofenceEnteredData, options);
                if (options.oneofs)
                    object.data = "geofenceEnteredData";
            }
            return object;
        };

        /**
         * Converts this Event to JSON.
         * @function toJSON
         * @memberof safevue_edge.Event
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Event.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Event
         * @function getTypeUrl
         * @memberof safevue_edge.Event
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.Event";
        };

        Event.AppStartUpData = (function() {

            /**
             * Properties of an AppStartUpData.
             * @memberof safevue_edge.Event
             * @interface IAppStartUpData
             * @property {Uint8Array|null} [watchMac] MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
             * @property {string|null} [appVersion] AppStartUpData appVersion
             */

            /**
             * Constructs a new AppStartUpData.
             * @memberof safevue_edge.Event
             * @classdesc Publish app started event to `dt/watch/{watch-id}/evt`
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
             * @implements IAppStartUpData
             * @constructor
             * @param {safevue_edge.Event.IAppStartUpData=} [properties] Properties to set
             */
            function AppStartUpData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
             * @member {Uint8Array} watchMac
             * @memberof safevue_edge.Event.AppStartUpData
             * @instance
             */
            AppStartUpData.prototype.watchMac = $util.newBuffer([]);

            /**
             * AppStartUpData appVersion.
             * @member {string} appVersion
             * @memberof safevue_edge.Event.AppStartUpData
             * @instance
             */
            AppStartUpData.prototype.appVersion = "";

            /**
             * Creates a new AppStartUpData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {safevue_edge.Event.IAppStartUpData=} [properties] Properties to set
             * @returns {safevue_edge.Event.AppStartUpData} AppStartUpData instance
             */
            AppStartUpData.create = function create(properties) {
                return new AppStartUpData(properties);
            };

            /**
             * Encodes the specified AppStartUpData message. Does not implicitly {@link safevue_edge.Event.AppStartUpData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {safevue_edge.Event.IAppStartUpData} message AppStartUpData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AppStartUpData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.watchMac != null && Object.hasOwnProperty.call(message, "watchMac"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.watchMac);
                if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.appVersion);
                return writer;
            };

            /**
             * Encodes the specified AppStartUpData message, length delimited. Does not implicitly {@link safevue_edge.Event.AppStartUpData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {safevue_edge.Event.IAppStartUpData} message AppStartUpData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AppStartUpData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AppStartUpData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Event.AppStartUpData} AppStartUpData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AppStartUpData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Event.AppStartUpData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.watchMac = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.appVersion = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AppStartUpData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Event.AppStartUpData} AppStartUpData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AppStartUpData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AppStartUpData message.
             * @function verify
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AppStartUpData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.watchMac != null && message.hasOwnProperty("watchMac"))
                    if (!(message.watchMac && typeof message.watchMac.length === "number" || $util.isString(message.watchMac)))
                        return "watchMac: buffer expected";
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    if (!$util.isString(message.appVersion))
                        return "appVersion: string expected";
                return null;
            };

            /**
             * Creates an AppStartUpData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Event.AppStartUpData} AppStartUpData
             */
            AppStartUpData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Event.AppStartUpData)
                    return object;
                var message = new $root.safevue_edge.Event.AppStartUpData();
                if (object.watchMac != null)
                    if (typeof object.watchMac === "string")
                        $util.base64.decode(object.watchMac, message.watchMac = $util.newBuffer($util.base64.length(object.watchMac)), 0);
                    else if (object.watchMac.length >= 0)
                        message.watchMac = object.watchMac;
                if (object.appVersion != null)
                    message.appVersion = String(object.appVersion);
                return message;
            };

            /**
             * Creates a plain object from an AppStartUpData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {safevue_edge.Event.AppStartUpData} message AppStartUpData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AppStartUpData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.watchMac = "";
                    else {
                        object.watchMac = [];
                        if (options.bytes !== Array)
                            object.watchMac = $util.newBuffer(object.watchMac);
                    }
                    object.appVersion = "";
                }
                if (message.watchMac != null && message.hasOwnProperty("watchMac"))
                    object.watchMac = options.bytes === String ? $util.base64.encode(message.watchMac, 0, message.watchMac.length) : options.bytes === Array ? Array.prototype.slice.call(message.watchMac) : message.watchMac;
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    object.appVersion = message.appVersion;
                return object;
            };

            /**
             * Converts this AppStartUpData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Event.AppStartUpData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AppStartUpData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AppStartUpData
             * @function getTypeUrl
             * @memberof safevue_edge.Event.AppStartUpData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AppStartUpData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Event.AppStartUpData";
            };

            return AppStartUpData;
        })();

        Event.FallDetectedData = (function() {

            /**
             * Properties of a FallDetectedData.
             * @memberof safevue_edge.Event
             * @interface IFallDetectedData
             * @property {boolean|null} [hasFallen] FallDetectedData hasFallen
             */

            /**
             * Constructs a new FallDetectedData.
             * @memberof safevue_edge.Event
             * @classdesc Publish fall detected event to `dt/watch/{watch-id}/evt`
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
             * @implements IFallDetectedData
             * @constructor
             * @param {safevue_edge.Event.IFallDetectedData=} [properties] Properties to set
             */
            function FallDetectedData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FallDetectedData hasFallen.
             * @member {boolean} hasFallen
             * @memberof safevue_edge.Event.FallDetectedData
             * @instance
             */
            FallDetectedData.prototype.hasFallen = false;

            /**
             * Creates a new FallDetectedData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {safevue_edge.Event.IFallDetectedData=} [properties] Properties to set
             * @returns {safevue_edge.Event.FallDetectedData} FallDetectedData instance
             */
            FallDetectedData.create = function create(properties) {
                return new FallDetectedData(properties);
            };

            /**
             * Encodes the specified FallDetectedData message. Does not implicitly {@link safevue_edge.Event.FallDetectedData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {safevue_edge.Event.IFallDetectedData} message FallDetectedData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FallDetectedData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hasFallen != null && Object.hasOwnProperty.call(message, "hasFallen"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hasFallen);
                return writer;
            };

            /**
             * Encodes the specified FallDetectedData message, length delimited. Does not implicitly {@link safevue_edge.Event.FallDetectedData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {safevue_edge.Event.IFallDetectedData} message FallDetectedData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FallDetectedData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FallDetectedData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Event.FallDetectedData} FallDetectedData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FallDetectedData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Event.FallDetectedData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.hasFallen = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FallDetectedData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Event.FallDetectedData} FallDetectedData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FallDetectedData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FallDetectedData message.
             * @function verify
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FallDetectedData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hasFallen != null && message.hasOwnProperty("hasFallen"))
                    if (typeof message.hasFallen !== "boolean")
                        return "hasFallen: boolean expected";
                return null;
            };

            /**
             * Creates a FallDetectedData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Event.FallDetectedData} FallDetectedData
             */
            FallDetectedData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Event.FallDetectedData)
                    return object;
                var message = new $root.safevue_edge.Event.FallDetectedData();
                if (object.hasFallen != null)
                    message.hasFallen = Boolean(object.hasFallen);
                return message;
            };

            /**
             * Creates a plain object from a FallDetectedData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {safevue_edge.Event.FallDetectedData} message FallDetectedData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FallDetectedData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.hasFallen = false;
                if (message.hasFallen != null && message.hasOwnProperty("hasFallen"))
                    object.hasFallen = message.hasFallen;
                return object;
            };

            /**
             * Converts this FallDetectedData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Event.FallDetectedData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FallDetectedData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FallDetectedData
             * @function getTypeUrl
             * @memberof safevue_edge.Event.FallDetectedData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FallDetectedData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Event.FallDetectedData";
            };

            return FallDetectedData;
        })();

        Event.GeofenceEnteredData = (function() {

            /**
             * Properties of a GeofenceEnteredData.
             * @memberof safevue_edge.Event
             * @interface IGeofenceEnteredData
             * @property {Array.<Uint8Array>|null} [beaconMacs] MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
             */

            /**
             * Constructs a new GeofenceEnteredData.
             * @memberof safevue_edge.Event
             * @classdesc Publish geofence entered event to `dt/watch/{watch-id}/evt`
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
             * @implements IGeofenceEnteredData
             * @constructor
             * @param {safevue_edge.Event.IGeofenceEnteredData=} [properties] Properties to set
             */
            function GeofenceEnteredData(properties) {
                this.beaconMacs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
             * @member {Array.<Uint8Array>} beaconMacs
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @instance
             */
            GeofenceEnteredData.prototype.beaconMacs = $util.emptyArray;

            /**
             * Creates a new GeofenceEnteredData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {safevue_edge.Event.IGeofenceEnteredData=} [properties] Properties to set
             * @returns {safevue_edge.Event.GeofenceEnteredData} GeofenceEnteredData instance
             */
            GeofenceEnteredData.create = function create(properties) {
                return new GeofenceEnteredData(properties);
            };

            /**
             * Encodes the specified GeofenceEnteredData message. Does not implicitly {@link safevue_edge.Event.GeofenceEnteredData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {safevue_edge.Event.IGeofenceEnteredData} message GeofenceEnteredData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeofenceEnteredData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.beaconMacs != null && message.beaconMacs.length)
                    for (var i = 0; i < message.beaconMacs.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.beaconMacs[i]);
                return writer;
            };

            /**
             * Encodes the specified GeofenceEnteredData message, length delimited. Does not implicitly {@link safevue_edge.Event.GeofenceEnteredData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {safevue_edge.Event.IGeofenceEnteredData} message GeofenceEnteredData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeofenceEnteredData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeofenceEnteredData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Event.GeofenceEnteredData} GeofenceEnteredData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeofenceEnteredData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Event.GeofenceEnteredData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.beaconMacs && message.beaconMacs.length))
                                message.beaconMacs = [];
                            message.beaconMacs.push(reader.bytes());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeofenceEnteredData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Event.GeofenceEnteredData} GeofenceEnteredData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeofenceEnteredData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeofenceEnteredData message.
             * @function verify
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeofenceEnteredData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.beaconMacs != null && message.hasOwnProperty("beaconMacs")) {
                    if (!Array.isArray(message.beaconMacs))
                        return "beaconMacs: array expected";
                    for (var i = 0; i < message.beaconMacs.length; ++i)
                        if (!(message.beaconMacs[i] && typeof message.beaconMacs[i].length === "number" || $util.isString(message.beaconMacs[i])))
                            return "beaconMacs: buffer[] expected";
                }
                return null;
            };

            /**
             * Creates a GeofenceEnteredData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Event.GeofenceEnteredData} GeofenceEnteredData
             */
            GeofenceEnteredData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Event.GeofenceEnteredData)
                    return object;
                var message = new $root.safevue_edge.Event.GeofenceEnteredData();
                if (object.beaconMacs) {
                    if (!Array.isArray(object.beaconMacs))
                        throw TypeError(".safevue_edge.Event.GeofenceEnteredData.beaconMacs: array expected");
                    message.beaconMacs = [];
                    for (var i = 0; i < object.beaconMacs.length; ++i)
                        if (typeof object.beaconMacs[i] === "string")
                            $util.base64.decode(object.beaconMacs[i], message.beaconMacs[i] = $util.newBuffer($util.base64.length(object.beaconMacs[i])), 0);
                        else if (object.beaconMacs[i].length >= 0)
                            message.beaconMacs[i] = object.beaconMacs[i];
                }
                return message;
            };

            /**
             * Creates a plain object from a GeofenceEnteredData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {safevue_edge.Event.GeofenceEnteredData} message GeofenceEnteredData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeofenceEnteredData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.beaconMacs = [];
                if (message.beaconMacs && message.beaconMacs.length) {
                    object.beaconMacs = [];
                    for (var j = 0; j < message.beaconMacs.length; ++j)
                        object.beaconMacs[j] = options.bytes === String ? $util.base64.encode(message.beaconMacs[j], 0, message.beaconMacs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.beaconMacs[j]) : message.beaconMacs[j];
                }
                return object;
            };

            /**
             * Converts this GeofenceEnteredData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeofenceEnteredData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GeofenceEnteredData
             * @function getTypeUrl
             * @memberof safevue_edge.Event.GeofenceEnteredData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GeofenceEnteredData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Event.GeofenceEnteredData";
            };

            return GeofenceEnteredData;
        })();

        return Event;
    })();

    safevue_edge.Sensor = (function() {

        /**
         * Properties of a Sensor.
         * @memberof safevue_edge
         * @interface ISensor
         * @property {number|null} [version] API version
         * @property {number|null} [timestamp] unix timestamp in seconds
         * @property {safevue_edge.Sensor.IBatteryData|null} [batteryData] Sensor batteryData
         * @property {safevue_edge.Sensor.IBeaconData|null} [beaconData] Sensor beaconData
         * @property {safevue_edge.Sensor.IGpsData|null} [gpsData] Sensor gpsData
         * @property {safevue_edge.Sensor.IHeartRateData|null} [heartRateData] Sensor heartRateData
         * @property {safevue_edge.Sensor.IHumidityData|null} [humidityData] Sensor humidityData
         * @property {safevue_edge.Sensor.INoiseData|null} [noiseData] Sensor noiseData
         * @property {safevue_edge.Sensor.IScreenData|null} [screenData] Sensor screenData
         * @property {safevue_edge.Sensor.IStepsData|null} [stepsData] Sensor stepsData
         * @property {safevue_edge.Sensor.ITemperatureData|null} [temperatureData] Sensor temperatureData
         * @property {safevue_edge.Sensor.IWifiData|null} [wifiData] Sensor wifiData
         */

        /**
         * Constructs a new Sensor.
         * @memberof safevue_edge
         * @classdesc Represents a Sensor.
         * @implements ISensor
         * @constructor
         * @param {safevue_edge.ISensor=} [properties] Properties to set
         */
        function Sensor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * API version
         * @member {number} version
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.version = 0;

        /**
         * unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.timestamp = 0;

        /**
         * Sensor batteryData.
         * @member {safevue_edge.Sensor.IBatteryData|null|undefined} batteryData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.batteryData = null;

        /**
         * Sensor beaconData.
         * @member {safevue_edge.Sensor.IBeaconData|null|undefined} beaconData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.beaconData = null;

        /**
         * Sensor gpsData.
         * @member {safevue_edge.Sensor.IGpsData|null|undefined} gpsData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.gpsData = null;

        /**
         * Sensor heartRateData.
         * @member {safevue_edge.Sensor.IHeartRateData|null|undefined} heartRateData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.heartRateData = null;

        /**
         * Sensor humidityData.
         * @member {safevue_edge.Sensor.IHumidityData|null|undefined} humidityData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.humidityData = null;

        /**
         * Sensor noiseData.
         * @member {safevue_edge.Sensor.INoiseData|null|undefined} noiseData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.noiseData = null;

        /**
         * Sensor screenData.
         * @member {safevue_edge.Sensor.IScreenData|null|undefined} screenData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.screenData = null;

        /**
         * Sensor stepsData.
         * @member {safevue_edge.Sensor.IStepsData|null|undefined} stepsData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.stepsData = null;

        /**
         * Sensor temperatureData.
         * @member {safevue_edge.Sensor.ITemperatureData|null|undefined} temperatureData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.temperatureData = null;

        /**
         * Sensor wifiData.
         * @member {safevue_edge.Sensor.IWifiData|null|undefined} wifiData
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Sensor.prototype.wifiData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Sensor data.
         * @member {"batteryData"|"beaconData"|"gpsData"|"heartRateData"|"humidityData"|"noiseData"|"screenData"|"stepsData"|"temperatureData"|"wifiData"|undefined} data
         * @memberof safevue_edge.Sensor
         * @instance
         */
        Object.defineProperty(Sensor.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["batteryData", "beaconData", "gpsData", "heartRateData", "humidityData", "noiseData", "screenData", "stepsData", "temperatureData", "wifiData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Sensor instance using the specified properties.
         * @function create
         * @memberof safevue_edge.Sensor
         * @static
         * @param {safevue_edge.ISensor=} [properties] Properties to set
         * @returns {safevue_edge.Sensor} Sensor instance
         */
        Sensor.create = function create(properties) {
            return new Sensor(properties);
        };

        /**
         * Encodes the specified Sensor message. Does not implicitly {@link safevue_edge.Sensor.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.Sensor
         * @static
         * @param {safevue_edge.ISensor} message Sensor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sensor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.batteryData != null && Object.hasOwnProperty.call(message, "batteryData"))
                $root.safevue_edge.Sensor.BatteryData.encode(message.batteryData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.beaconData != null && Object.hasOwnProperty.call(message, "beaconData"))
                $root.safevue_edge.Sensor.BeaconData.encode(message.beaconData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gpsData != null && Object.hasOwnProperty.call(message, "gpsData"))
                $root.safevue_edge.Sensor.GpsData.encode(message.gpsData, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.heartRateData != null && Object.hasOwnProperty.call(message, "heartRateData"))
                $root.safevue_edge.Sensor.HeartRateData.encode(message.heartRateData, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.humidityData != null && Object.hasOwnProperty.call(message, "humidityData"))
                $root.safevue_edge.Sensor.HumidityData.encode(message.humidityData, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.noiseData != null && Object.hasOwnProperty.call(message, "noiseData"))
                $root.safevue_edge.Sensor.NoiseData.encode(message.noiseData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.screenData != null && Object.hasOwnProperty.call(message, "screenData"))
                $root.safevue_edge.Sensor.ScreenData.encode(message.screenData, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.stepsData != null && Object.hasOwnProperty.call(message, "stepsData"))
                $root.safevue_edge.Sensor.StepsData.encode(message.stepsData, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.temperatureData != null && Object.hasOwnProperty.call(message, "temperatureData"))
                $root.safevue_edge.Sensor.TemperatureData.encode(message.temperatureData, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.wifiData != null && Object.hasOwnProperty.call(message, "wifiData"))
                $root.safevue_edge.Sensor.WifiData.encode(message.wifiData, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Sensor message, length delimited. Does not implicitly {@link safevue_edge.Sensor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.Sensor
         * @static
         * @param {safevue_edge.ISensor} message Sensor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sensor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sensor message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.Sensor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.Sensor} Sensor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sensor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.batteryData = $root.safevue_edge.Sensor.BatteryData.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.beaconData = $root.safevue_edge.Sensor.BeaconData.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.gpsData = $root.safevue_edge.Sensor.GpsData.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.heartRateData = $root.safevue_edge.Sensor.HeartRateData.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.humidityData = $root.safevue_edge.Sensor.HumidityData.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.noiseData = $root.safevue_edge.Sensor.NoiseData.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.screenData = $root.safevue_edge.Sensor.ScreenData.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.stepsData = $root.safevue_edge.Sensor.StepsData.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.temperatureData = $root.safevue_edge.Sensor.TemperatureData.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.wifiData = $root.safevue_edge.Sensor.WifiData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sensor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.Sensor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.Sensor} Sensor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sensor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sensor message.
         * @function verify
         * @memberof safevue_edge.Sensor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sensor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.batteryData != null && message.hasOwnProperty("batteryData")) {
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.BatteryData.verify(message.batteryData);
                    if (error)
                        return "batteryData." + error;
                }
            }
            if (message.beaconData != null && message.hasOwnProperty("beaconData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.BeaconData.verify(message.beaconData);
                    if (error)
                        return "beaconData." + error;
                }
            }
            if (message.gpsData != null && message.hasOwnProperty("gpsData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.GpsData.verify(message.gpsData);
                    if (error)
                        return "gpsData." + error;
                }
            }
            if (message.heartRateData != null && message.hasOwnProperty("heartRateData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.HeartRateData.verify(message.heartRateData);
                    if (error)
                        return "heartRateData." + error;
                }
            }
            if (message.humidityData != null && message.hasOwnProperty("humidityData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.HumidityData.verify(message.humidityData);
                    if (error)
                        return "humidityData." + error;
                }
            }
            if (message.noiseData != null && message.hasOwnProperty("noiseData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.NoiseData.verify(message.noiseData);
                    if (error)
                        return "noiseData." + error;
                }
            }
            if (message.screenData != null && message.hasOwnProperty("screenData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.ScreenData.verify(message.screenData);
                    if (error)
                        return "screenData." + error;
                }
            }
            if (message.stepsData != null && message.hasOwnProperty("stepsData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.StepsData.verify(message.stepsData);
                    if (error)
                        return "stepsData." + error;
                }
            }
            if (message.temperatureData != null && message.hasOwnProperty("temperatureData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.TemperatureData.verify(message.temperatureData);
                    if (error)
                        return "temperatureData." + error;
                }
            }
            if (message.wifiData != null && message.hasOwnProperty("wifiData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.safevue_edge.Sensor.WifiData.verify(message.wifiData);
                    if (error)
                        return "wifiData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Sensor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.Sensor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.Sensor} Sensor
         */
        Sensor.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.Sensor)
                return object;
            var message = new $root.safevue_edge.Sensor();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.batteryData != null) {
                if (typeof object.batteryData !== "object")
                    throw TypeError(".safevue_edge.Sensor.batteryData: object expected");
                message.batteryData = $root.safevue_edge.Sensor.BatteryData.fromObject(object.batteryData);
            }
            if (object.beaconData != null) {
                if (typeof object.beaconData !== "object")
                    throw TypeError(".safevue_edge.Sensor.beaconData: object expected");
                message.beaconData = $root.safevue_edge.Sensor.BeaconData.fromObject(object.beaconData);
            }
            if (object.gpsData != null) {
                if (typeof object.gpsData !== "object")
                    throw TypeError(".safevue_edge.Sensor.gpsData: object expected");
                message.gpsData = $root.safevue_edge.Sensor.GpsData.fromObject(object.gpsData);
            }
            if (object.heartRateData != null) {
                if (typeof object.heartRateData !== "object")
                    throw TypeError(".safevue_edge.Sensor.heartRateData: object expected");
                message.heartRateData = $root.safevue_edge.Sensor.HeartRateData.fromObject(object.heartRateData);
            }
            if (object.humidityData != null) {
                if (typeof object.humidityData !== "object")
                    throw TypeError(".safevue_edge.Sensor.humidityData: object expected");
                message.humidityData = $root.safevue_edge.Sensor.HumidityData.fromObject(object.humidityData);
            }
            if (object.noiseData != null) {
                if (typeof object.noiseData !== "object")
                    throw TypeError(".safevue_edge.Sensor.noiseData: object expected");
                message.noiseData = $root.safevue_edge.Sensor.NoiseData.fromObject(object.noiseData);
            }
            if (object.screenData != null) {
                if (typeof object.screenData !== "object")
                    throw TypeError(".safevue_edge.Sensor.screenData: object expected");
                message.screenData = $root.safevue_edge.Sensor.ScreenData.fromObject(object.screenData);
            }
            if (object.stepsData != null) {
                if (typeof object.stepsData !== "object")
                    throw TypeError(".safevue_edge.Sensor.stepsData: object expected");
                message.stepsData = $root.safevue_edge.Sensor.StepsData.fromObject(object.stepsData);
            }
            if (object.temperatureData != null) {
                if (typeof object.temperatureData !== "object")
                    throw TypeError(".safevue_edge.Sensor.temperatureData: object expected");
                message.temperatureData = $root.safevue_edge.Sensor.TemperatureData.fromObject(object.temperatureData);
            }
            if (object.wifiData != null) {
                if (typeof object.wifiData !== "object")
                    throw TypeError(".safevue_edge.Sensor.wifiData: object expected");
                message.wifiData = $root.safevue_edge.Sensor.WifiData.fromObject(object.wifiData);
            }
            return message;
        };

        /**
         * Creates a plain object from a Sensor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.Sensor
         * @static
         * @param {safevue_edge.Sensor} message Sensor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sensor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.batteryData != null && message.hasOwnProperty("batteryData")) {
                object.batteryData = $root.safevue_edge.Sensor.BatteryData.toObject(message.batteryData, options);
                if (options.oneofs)
                    object.data = "batteryData";
            }
            if (message.beaconData != null && message.hasOwnProperty("beaconData")) {
                object.beaconData = $root.safevue_edge.Sensor.BeaconData.toObject(message.beaconData, options);
                if (options.oneofs)
                    object.data = "beaconData";
            }
            if (message.gpsData != null && message.hasOwnProperty("gpsData")) {
                object.gpsData = $root.safevue_edge.Sensor.GpsData.toObject(message.gpsData, options);
                if (options.oneofs)
                    object.data = "gpsData";
            }
            if (message.heartRateData != null && message.hasOwnProperty("heartRateData")) {
                object.heartRateData = $root.safevue_edge.Sensor.HeartRateData.toObject(message.heartRateData, options);
                if (options.oneofs)
                    object.data = "heartRateData";
            }
            if (message.humidityData != null && message.hasOwnProperty("humidityData")) {
                object.humidityData = $root.safevue_edge.Sensor.HumidityData.toObject(message.humidityData, options);
                if (options.oneofs)
                    object.data = "humidityData";
            }
            if (message.noiseData != null && message.hasOwnProperty("noiseData")) {
                object.noiseData = $root.safevue_edge.Sensor.NoiseData.toObject(message.noiseData, options);
                if (options.oneofs)
                    object.data = "noiseData";
            }
            if (message.screenData != null && message.hasOwnProperty("screenData")) {
                object.screenData = $root.safevue_edge.Sensor.ScreenData.toObject(message.screenData, options);
                if (options.oneofs)
                    object.data = "screenData";
            }
            if (message.stepsData != null && message.hasOwnProperty("stepsData")) {
                object.stepsData = $root.safevue_edge.Sensor.StepsData.toObject(message.stepsData, options);
                if (options.oneofs)
                    object.data = "stepsData";
            }
            if (message.temperatureData != null && message.hasOwnProperty("temperatureData")) {
                object.temperatureData = $root.safevue_edge.Sensor.TemperatureData.toObject(message.temperatureData, options);
                if (options.oneofs)
                    object.data = "temperatureData";
            }
            if (message.wifiData != null && message.hasOwnProperty("wifiData")) {
                object.wifiData = $root.safevue_edge.Sensor.WifiData.toObject(message.wifiData, options);
                if (options.oneofs)
                    object.data = "wifiData";
            }
            return object;
        };

        /**
         * Converts this Sensor to JSON.
         * @function toJSON
         * @memberof safevue_edge.Sensor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sensor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sensor
         * @function getTypeUrl
         * @memberof safevue_edge.Sensor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sensor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.Sensor";
        };

        Sensor.BatteryData = (function() {

            /**
             * Properties of a BatteryData.
             * @memberof safevue_edge.Sensor
             * @interface IBatteryData
             * @property {number|null} [level] battery level
             * @property {number|null} [temperature] battery temperature
             * @property {safevue_edge.Sensor.BatteryData.Status|null} [status] BatteryData status
             */

            /**
             * Constructs a new BatteryData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish battery metrics to `dt/watch/{watch-id}/sensor/battery`
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
             * @implements IBatteryData
             * @constructor
             * @param {safevue_edge.Sensor.IBatteryData=} [properties] Properties to set
             */
            function BatteryData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * battery level
             * @member {number} level
             * @memberof safevue_edge.Sensor.BatteryData
             * @instance
             */
            BatteryData.prototype.level = 0;

            /**
             * battery temperature
             * @member {number} temperature
             * @memberof safevue_edge.Sensor.BatteryData
             * @instance
             */
            BatteryData.prototype.temperature = 0;

            /**
             * BatteryData status.
             * @member {safevue_edge.Sensor.BatteryData.Status} status
             * @memberof safevue_edge.Sensor.BatteryData
             * @instance
             */
            BatteryData.prototype.status = 0;

            /**
             * Creates a new BatteryData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {safevue_edge.Sensor.IBatteryData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.BatteryData} BatteryData instance
             */
            BatteryData.create = function create(properties) {
                return new BatteryData(properties);
            };

            /**
             * Encodes the specified BatteryData message. Does not implicitly {@link safevue_edge.Sensor.BatteryData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {safevue_edge.Sensor.IBatteryData} message BatteryData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatteryData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.level);
                if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.temperature);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
                return writer;
            };

            /**
             * Encodes the specified BatteryData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.BatteryData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {safevue_edge.Sensor.IBatteryData} message BatteryData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BatteryData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BatteryData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.BatteryData} BatteryData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatteryData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.BatteryData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.level = reader.float();
                            break;
                        }
                    case 2: {
                            message.temperature = reader.float();
                            break;
                        }
                    case 3: {
                            message.status = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BatteryData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.BatteryData} BatteryData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BatteryData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BatteryData message.
             * @function verify
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BatteryData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (typeof message.level !== "number")
                        return "level: number expected";
                if (message.temperature != null && message.hasOwnProperty("temperature"))
                    if (typeof message.temperature !== "number")
                        return "temperature: number expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                return null;
            };

            /**
             * Creates a BatteryData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.BatteryData} BatteryData
             */
            BatteryData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.BatteryData)
                    return object;
                var message = new $root.safevue_edge.Sensor.BatteryData();
                if (object.level != null)
                    message.level = Number(object.level);
                if (object.temperature != null)
                    message.temperature = Number(object.temperature);
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "CHARGING":
                case 0:
                    message.status = 0;
                    break;
                case "DISCHARGING":
                case 1:
                    message.status = 1;
                    break;
                case "FULL":
                case 2:
                    message.status = 2;
                    break;
                case "NOT_CHARGING":
                case 3:
                    message.status = 3;
                    break;
                case "UNKNOWN":
                case 4:
                    message.status = 4;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a BatteryData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {safevue_edge.Sensor.BatteryData} message BatteryData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BatteryData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.level = 0;
                    object.temperature = 0;
                    object.status = options.enums === String ? "CHARGING" : 0;
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = options.json && !isFinite(message.level) ? String(message.level) : message.level;
                if (message.temperature != null && message.hasOwnProperty("temperature"))
                    object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.safevue_edge.Sensor.BatteryData.Status[message.status] === undefined ? message.status : $root.safevue_edge.Sensor.BatteryData.Status[message.status] : message.status;
                return object;
            };

            /**
             * Converts this BatteryData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.BatteryData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BatteryData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BatteryData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.BatteryData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BatteryData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.BatteryData";
            };

            /**
             * Status enum.
             * @name safevue_edge.Sensor.BatteryData.Status
             * @enum {number}
             * @property {number} CHARGING=0 CHARGING value
             * @property {number} DISCHARGING=1 DISCHARGING value
             * @property {number} FULL=2 FULL value
             * @property {number} NOT_CHARGING=3 NOT_CHARGING value
             * @property {number} UNKNOWN=4 UNKNOWN value
             */
            BatteryData.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CHARGING"] = 0;
                values[valuesById[1] = "DISCHARGING"] = 1;
                values[valuesById[2] = "FULL"] = 2;
                values[valuesById[3] = "NOT_CHARGING"] = 3;
                values[valuesById[4] = "UNKNOWN"] = 4;
                return values;
            })();

            return BatteryData;
        })();

        Sensor.BeaconData = (function() {

            /**
             * Properties of a BeaconData.
             * @memberof safevue_edge.Sensor
             * @interface IBeaconData
             * @property {Array.<Uint8Array>|null} [mac] MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
             * @property {Array.<number>|null} [rssi] BeaconData rssi
             * @property {Array.<number>|null} [battery] BeaconData battery
             */

            /**
             * Constructs a new BeaconData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish detected beacons to `dt/watch/{watch-id}/sensor/beacon`
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
             * @implements IBeaconData
             * @constructor
             * @param {safevue_edge.Sensor.IBeaconData=} [properties] Properties to set
             */
            function BeaconData(properties) {
                this.mac = [];
                this.rssi = [];
                this.battery = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MAC address in bytes e.g. 'AA:BB:CC:DD:EE:FF' becomes [0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]
             * @member {Array.<Uint8Array>} mac
             * @memberof safevue_edge.Sensor.BeaconData
             * @instance
             */
            BeaconData.prototype.mac = $util.emptyArray;

            /**
             * BeaconData rssi.
             * @member {Array.<number>} rssi
             * @memberof safevue_edge.Sensor.BeaconData
             * @instance
             */
            BeaconData.prototype.rssi = $util.emptyArray;

            /**
             * BeaconData battery.
             * @member {Array.<number>} battery
             * @memberof safevue_edge.Sensor.BeaconData
             * @instance
             */
            BeaconData.prototype.battery = $util.emptyArray;

            /**
             * Creates a new BeaconData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {safevue_edge.Sensor.IBeaconData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.BeaconData} BeaconData instance
             */
            BeaconData.create = function create(properties) {
                return new BeaconData(properties);
            };

            /**
             * Encodes the specified BeaconData message. Does not implicitly {@link safevue_edge.Sensor.BeaconData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {safevue_edge.Sensor.IBeaconData} message BeaconData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeaconData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mac != null && message.mac.length)
                    for (var i = 0; i < message.mac.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mac[i]);
                if (message.rssi != null && message.rssi.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.rssi.length; ++i)
                        writer.sint32(message.rssi[i]);
                    writer.ldelim();
                }
                if (message.battery != null && message.battery.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.battery.length; ++i)
                        writer.int32(message.battery[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified BeaconData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.BeaconData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {safevue_edge.Sensor.IBeaconData} message BeaconData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeaconData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BeaconData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.BeaconData} BeaconData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeaconData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.BeaconData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.mac && message.mac.length))
                                message.mac = [];
                            message.mac.push(reader.bytes());
                            break;
                        }
                    case 2: {
                            if (!(message.rssi && message.rssi.length))
                                message.rssi = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.rssi.push(reader.sint32());
                            } else
                                message.rssi.push(reader.sint32());
                            break;
                        }
                    case 3: {
                            if (!(message.battery && message.battery.length))
                                message.battery = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.battery.push(reader.int32());
                            } else
                                message.battery.push(reader.int32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BeaconData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.BeaconData} BeaconData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeaconData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BeaconData message.
             * @function verify
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BeaconData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.mac != null && message.hasOwnProperty("mac")) {
                    if (!Array.isArray(message.mac))
                        return "mac: array expected";
                    for (var i = 0; i < message.mac.length; ++i)
                        if (!(message.mac[i] && typeof message.mac[i].length === "number" || $util.isString(message.mac[i])))
                            return "mac: buffer[] expected";
                }
                if (message.rssi != null && message.hasOwnProperty("rssi")) {
                    if (!Array.isArray(message.rssi))
                        return "rssi: array expected";
                    for (var i = 0; i < message.rssi.length; ++i)
                        if (!$util.isInteger(message.rssi[i]))
                            return "rssi: integer[] expected";
                }
                if (message.battery != null && message.hasOwnProperty("battery")) {
                    if (!Array.isArray(message.battery))
                        return "battery: array expected";
                    for (var i = 0; i < message.battery.length; ++i)
                        if (!$util.isInteger(message.battery[i]))
                            return "battery: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a BeaconData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.BeaconData} BeaconData
             */
            BeaconData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.BeaconData)
                    return object;
                var message = new $root.safevue_edge.Sensor.BeaconData();
                if (object.mac) {
                    if (!Array.isArray(object.mac))
                        throw TypeError(".safevue_edge.Sensor.BeaconData.mac: array expected");
                    message.mac = [];
                    for (var i = 0; i < object.mac.length; ++i)
                        if (typeof object.mac[i] === "string")
                            $util.base64.decode(object.mac[i], message.mac[i] = $util.newBuffer($util.base64.length(object.mac[i])), 0);
                        else if (object.mac[i].length >= 0)
                            message.mac[i] = object.mac[i];
                }
                if (object.rssi) {
                    if (!Array.isArray(object.rssi))
                        throw TypeError(".safevue_edge.Sensor.BeaconData.rssi: array expected");
                    message.rssi = [];
                    for (var i = 0; i < object.rssi.length; ++i)
                        message.rssi[i] = object.rssi[i] | 0;
                }
                if (object.battery) {
                    if (!Array.isArray(object.battery))
                        throw TypeError(".safevue_edge.Sensor.BeaconData.battery: array expected");
                    message.battery = [];
                    for (var i = 0; i < object.battery.length; ++i)
                        message.battery[i] = object.battery[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a BeaconData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {safevue_edge.Sensor.BeaconData} message BeaconData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BeaconData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.mac = [];
                    object.rssi = [];
                    object.battery = [];
                }
                if (message.mac && message.mac.length) {
                    object.mac = [];
                    for (var j = 0; j < message.mac.length; ++j)
                        object.mac[j] = options.bytes === String ? $util.base64.encode(message.mac[j], 0, message.mac[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.mac[j]) : message.mac[j];
                }
                if (message.rssi && message.rssi.length) {
                    object.rssi = [];
                    for (var j = 0; j < message.rssi.length; ++j)
                        object.rssi[j] = message.rssi[j];
                }
                if (message.battery && message.battery.length) {
                    object.battery = [];
                    for (var j = 0; j < message.battery.length; ++j)
                        object.battery[j] = message.battery[j];
                }
                return object;
            };

            /**
             * Converts this BeaconData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.BeaconData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BeaconData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BeaconData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.BeaconData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BeaconData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.BeaconData";
            };

            return BeaconData;
        })();

        Sensor.GpsData = (function() {

            /**
             * Properties of a GpsData.
             * @memberof safevue_edge.Sensor
             * @interface IGpsData
             * @property {number|null} [altitude] GpsData altitude
             * @property {number|null} [latitude] GpsData latitude
             * @property {number|null} [longitude] GpsData longitude
             */

            /**
             * Constructs a new GpsData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish GPS location to `dt/watch/{watch-id}/sensor/gps`
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
             * @implements IGpsData
             * @constructor
             * @param {safevue_edge.Sensor.IGpsData=} [properties] Properties to set
             */
            function GpsData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GpsData altitude.
             * @member {number} altitude
             * @memberof safevue_edge.Sensor.GpsData
             * @instance
             */
            GpsData.prototype.altitude = 0;

            /**
             * GpsData latitude.
             * @member {number} latitude
             * @memberof safevue_edge.Sensor.GpsData
             * @instance
             */
            GpsData.prototype.latitude = 0;

            /**
             * GpsData longitude.
             * @member {number} longitude
             * @memberof safevue_edge.Sensor.GpsData
             * @instance
             */
            GpsData.prototype.longitude = 0;

            /**
             * Creates a new GpsData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {safevue_edge.Sensor.IGpsData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.GpsData} GpsData instance
             */
            GpsData.create = function create(properties) {
                return new GpsData(properties);
            };

            /**
             * Encodes the specified GpsData message. Does not implicitly {@link safevue_edge.Sensor.GpsData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {safevue_edge.Sensor.IGpsData} message GpsData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.altitude != null && Object.hasOwnProperty.call(message, "altitude"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.altitude);
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.latitude);
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.longitude);
                return writer;
            };

            /**
             * Encodes the specified GpsData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.GpsData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {safevue_edge.Sensor.IGpsData} message GpsData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GpsData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.GpsData} GpsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.GpsData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.altitude = reader.float();
                            break;
                        }
                    case 2: {
                            message.latitude = reader.float();
                            break;
                        }
                    case 3: {
                            message.longitude = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GpsData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.GpsData} GpsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GpsData message.
             * @function verify
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GpsData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.altitude != null && message.hasOwnProperty("altitude"))
                    if (typeof message.altitude !== "number")
                        return "altitude: number expected";
                if (message.latitude != null && message.hasOwnProperty("latitude"))
                    if (typeof message.latitude !== "number")
                        return "latitude: number expected";
                if (message.longitude != null && message.hasOwnProperty("longitude"))
                    if (typeof message.longitude !== "number")
                        return "longitude: number expected";
                return null;
            };

            /**
             * Creates a GpsData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.GpsData} GpsData
             */
            GpsData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.GpsData)
                    return object;
                var message = new $root.safevue_edge.Sensor.GpsData();
                if (object.altitude != null)
                    message.altitude = Number(object.altitude);
                if (object.latitude != null)
                    message.latitude = Number(object.latitude);
                if (object.longitude != null)
                    message.longitude = Number(object.longitude);
                return message;
            };

            /**
             * Creates a plain object from a GpsData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {safevue_edge.Sensor.GpsData} message GpsData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GpsData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.altitude = 0;
                    object.latitude = 0;
                    object.longitude = 0;
                }
                if (message.altitude != null && message.hasOwnProperty("altitude"))
                    object.altitude = options.json && !isFinite(message.altitude) ? String(message.altitude) : message.altitude;
                if (message.latitude != null && message.hasOwnProperty("latitude"))
                    object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                if (message.longitude != null && message.hasOwnProperty("longitude"))
                    object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                return object;
            };

            /**
             * Converts this GpsData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.GpsData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GpsData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GpsData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.GpsData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GpsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.GpsData";
            };

            return GpsData;
        })();

        Sensor.HeartRateData = (function() {

            /**
             * Properties of a HeartRateData.
             * @memberof safevue_edge.Sensor
             * @interface IHeartRateData
             * @property {number|null} [value] HeartRateData value
             */

            /**
             * Constructs a new HeartRateData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish heart rate measurement to `dt/watch/{watch-id}/sensor/heartrate`
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
             * @implements IHeartRateData
             * @constructor
             * @param {safevue_edge.Sensor.IHeartRateData=} [properties] Properties to set
             */
            function HeartRateData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HeartRateData value.
             * @member {number} value
             * @memberof safevue_edge.Sensor.HeartRateData
             * @instance
             */
            HeartRateData.prototype.value = 0;

            /**
             * Creates a new HeartRateData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {safevue_edge.Sensor.IHeartRateData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.HeartRateData} HeartRateData instance
             */
            HeartRateData.create = function create(properties) {
                return new HeartRateData(properties);
            };

            /**
             * Encodes the specified HeartRateData message. Does not implicitly {@link safevue_edge.Sensor.HeartRateData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {safevue_edge.Sensor.IHeartRateData} message HeartRateData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartRateData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified HeartRateData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.HeartRateData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {safevue_edge.Sensor.IHeartRateData} message HeartRateData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartRateData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HeartRateData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.HeartRateData} HeartRateData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartRateData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.HeartRateData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HeartRateData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.HeartRateData} HeartRateData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartRateData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HeartRateData message.
             * @function verify
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HeartRateData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a HeartRateData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.HeartRateData} HeartRateData
             */
            HeartRateData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.HeartRateData)
                    return object;
                var message = new $root.safevue_edge.Sensor.HeartRateData();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a HeartRateData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {safevue_edge.Sensor.HeartRateData} message HeartRateData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HeartRateData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this HeartRateData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.HeartRateData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HeartRateData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HeartRateData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.HeartRateData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HeartRateData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.HeartRateData";
            };

            return HeartRateData;
        })();

        Sensor.HumidityData = (function() {

            /**
             * Properties of a HumidityData.
             * @memberof safevue_edge.Sensor
             * @interface IHumidityData
             * @property {number|null} [value] HumidityData value
             */

            /**
             * Constructs a new HumidityData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish humidity measurement to `dt/watch/{watch-id}/sensor/humidity`
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
             * @implements IHumidityData
             * @constructor
             * @param {safevue_edge.Sensor.IHumidityData=} [properties] Properties to set
             */
            function HumidityData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HumidityData value.
             * @member {number} value
             * @memberof safevue_edge.Sensor.HumidityData
             * @instance
             */
            HumidityData.prototype.value = 0;

            /**
             * Creates a new HumidityData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {safevue_edge.Sensor.IHumidityData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.HumidityData} HumidityData instance
             */
            HumidityData.create = function create(properties) {
                return new HumidityData(properties);
            };

            /**
             * Encodes the specified HumidityData message. Does not implicitly {@link safevue_edge.Sensor.HumidityData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {safevue_edge.Sensor.IHumidityData} message HumidityData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HumidityData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified HumidityData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.HumidityData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {safevue_edge.Sensor.IHumidityData} message HumidityData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HumidityData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HumidityData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.HumidityData} HumidityData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HumidityData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.HumidityData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HumidityData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.HumidityData} HumidityData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HumidityData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HumidityData message.
             * @function verify
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HumidityData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a HumidityData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.HumidityData} HumidityData
             */
            HumidityData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.HumidityData)
                    return object;
                var message = new $root.safevue_edge.Sensor.HumidityData();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a HumidityData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {safevue_edge.Sensor.HumidityData} message HumidityData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HumidityData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this HumidityData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.HumidityData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HumidityData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HumidityData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.HumidityData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HumidityData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.HumidityData";
            };

            return HumidityData;
        })();

        Sensor.NoiseData = (function() {

            /**
             * Properties of a NoiseData.
             * @memberof safevue_edge.Sensor
             * @interface INoiseData
             * @property {number|null} [dBA] NoiseData dBA
             * @property {number|null} [dBZ] NoiseData dBZ
             */

            /**
             * Constructs a new NoiseData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish noise measurement to `dt/watch/{watch-id}/sensor/noise`
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
             * @implements INoiseData
             * @constructor
             * @param {safevue_edge.Sensor.INoiseData=} [properties] Properties to set
             */
            function NoiseData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NoiseData dBA.
             * @member {number} dBA
             * @memberof safevue_edge.Sensor.NoiseData
             * @instance
             */
            NoiseData.prototype.dBA = 0;

            /**
             * NoiseData dBZ.
             * @member {number} dBZ
             * @memberof safevue_edge.Sensor.NoiseData
             * @instance
             */
            NoiseData.prototype.dBZ = 0;

            /**
             * Creates a new NoiseData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {safevue_edge.Sensor.INoiseData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.NoiseData} NoiseData instance
             */
            NoiseData.create = function create(properties) {
                return new NoiseData(properties);
            };

            /**
             * Encodes the specified NoiseData message. Does not implicitly {@link safevue_edge.Sensor.NoiseData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {safevue_edge.Sensor.INoiseData} message NoiseData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoiseData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dBA != null && Object.hasOwnProperty.call(message, "dBA"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.dBA);
                if (message.dBZ != null && Object.hasOwnProperty.call(message, "dBZ"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.dBZ);
                return writer;
            };

            /**
             * Encodes the specified NoiseData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.NoiseData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {safevue_edge.Sensor.INoiseData} message NoiseData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoiseData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NoiseData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.NoiseData} NoiseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoiseData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.NoiseData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.dBA = reader.sint32();
                            break;
                        }
                    case 2: {
                            message.dBZ = reader.sint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NoiseData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.NoiseData} NoiseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoiseData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NoiseData message.
             * @function verify
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NoiseData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dBA != null && message.hasOwnProperty("dBA"))
                    if (!$util.isInteger(message.dBA))
                        return "dBA: integer expected";
                if (message.dBZ != null && message.hasOwnProperty("dBZ"))
                    if (!$util.isInteger(message.dBZ))
                        return "dBZ: integer expected";
                return null;
            };

            /**
             * Creates a NoiseData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.NoiseData} NoiseData
             */
            NoiseData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.NoiseData)
                    return object;
                var message = new $root.safevue_edge.Sensor.NoiseData();
                if (object.dBA != null)
                    message.dBA = object.dBA | 0;
                if (object.dBZ != null)
                    message.dBZ = object.dBZ | 0;
                return message;
            };

            /**
             * Creates a plain object from a NoiseData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {safevue_edge.Sensor.NoiseData} message NoiseData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NoiseData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.dBA = 0;
                    object.dBZ = 0;
                }
                if (message.dBA != null && message.hasOwnProperty("dBA"))
                    object.dBA = message.dBA;
                if (message.dBZ != null && message.hasOwnProperty("dBZ"))
                    object.dBZ = message.dBZ;
                return object;
            };

            /**
             * Converts this NoiseData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.NoiseData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NoiseData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NoiseData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.NoiseData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NoiseData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.NoiseData";
            };

            return NoiseData;
        })();

        Sensor.ScreenData = (function() {

            /**
             * Properties of a ScreenData.
             * @memberof safevue_edge.Sensor
             * @interface IScreenData
             * @property {number|null} [value] screen on time in seconds since last collection
             */

            /**
             * Constructs a new ScreenData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish screen metrics to `dt/watch/{watch-id}/sensor/screen`
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
             * @implements IScreenData
             * @constructor
             * @param {safevue_edge.Sensor.IScreenData=} [properties] Properties to set
             */
            function ScreenData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * screen on time in seconds since last collection
             * @member {number} value
             * @memberof safevue_edge.Sensor.ScreenData
             * @instance
             */
            ScreenData.prototype.value = 0;

            /**
             * Creates a new ScreenData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {safevue_edge.Sensor.IScreenData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.ScreenData} ScreenData instance
             */
            ScreenData.create = function create(properties) {
                return new ScreenData(properties);
            };

            /**
             * Encodes the specified ScreenData message. Does not implicitly {@link safevue_edge.Sensor.ScreenData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {safevue_edge.Sensor.IScreenData} message ScreenData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScreenData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified ScreenData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.ScreenData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {safevue_edge.Sensor.IScreenData} message ScreenData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScreenData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ScreenData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.ScreenData} ScreenData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScreenData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.ScreenData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ScreenData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.ScreenData} ScreenData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScreenData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ScreenData message.
             * @function verify
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ScreenData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a ScreenData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.ScreenData} ScreenData
             */
            ScreenData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.ScreenData)
                    return object;
                var message = new $root.safevue_edge.Sensor.ScreenData();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a ScreenData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {safevue_edge.Sensor.ScreenData} message ScreenData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScreenData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this ScreenData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.ScreenData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ScreenData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ScreenData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.ScreenData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ScreenData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.ScreenData";
            };

            return ScreenData;
        })();

        Sensor.StepsData = (function() {

            /**
             * Properties of a StepsData.
             * @memberof safevue_edge.Sensor
             * @interface IStepsData
             * @property {number|null} [value] StepsData value
             */

            /**
             * Constructs a new StepsData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish steps measurement to `dt/watch/{watch-id}/sensor/steps`
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
             * @implements IStepsData
             * @constructor
             * @param {safevue_edge.Sensor.IStepsData=} [properties] Properties to set
             */
            function StepsData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StepsData value.
             * @member {number} value
             * @memberof safevue_edge.Sensor.StepsData
             * @instance
             */
            StepsData.prototype.value = 0;

            /**
             * Creates a new StepsData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {safevue_edge.Sensor.IStepsData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.StepsData} StepsData instance
             */
            StepsData.create = function create(properties) {
                return new StepsData(properties);
            };

            /**
             * Encodes the specified StepsData message. Does not implicitly {@link safevue_edge.Sensor.StepsData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {safevue_edge.Sensor.IStepsData} message StepsData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StepsData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified StepsData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.StepsData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {safevue_edge.Sensor.IStepsData} message StepsData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StepsData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StepsData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.StepsData} StepsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StepsData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.StepsData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StepsData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.StepsData} StepsData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StepsData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StepsData message.
             * @function verify
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StepsData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a StepsData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.StepsData} StepsData
             */
            StepsData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.StepsData)
                    return object;
                var message = new $root.safevue_edge.Sensor.StepsData();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a StepsData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {safevue_edge.Sensor.StepsData} message StepsData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StepsData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StepsData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.StepsData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StepsData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StepsData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.StepsData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StepsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.StepsData";
            };

            return StepsData;
        })();

        Sensor.TemperatureData = (function() {

            /**
             * Properties of a TemperatureData.
             * @memberof safevue_edge.Sensor
             * @interface ITemperatureData
             * @property {number|null} [value] TemperatureData value
             */

            /**
             * Constructs a new TemperatureData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish temperature measurement to `dt/watch/{watch-id}/sensor/temperature`
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
             * @implements ITemperatureData
             * @constructor
             * @param {safevue_edge.Sensor.ITemperatureData=} [properties] Properties to set
             */
            function TemperatureData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TemperatureData value.
             * @member {number} value
             * @memberof safevue_edge.Sensor.TemperatureData
             * @instance
             */
            TemperatureData.prototype.value = 0;

            /**
             * Creates a new TemperatureData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {safevue_edge.Sensor.ITemperatureData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.TemperatureData} TemperatureData instance
             */
            TemperatureData.create = function create(properties) {
                return new TemperatureData(properties);
            };

            /**
             * Encodes the specified TemperatureData message. Does not implicitly {@link safevue_edge.Sensor.TemperatureData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {safevue_edge.Sensor.ITemperatureData} message TemperatureData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TemperatureData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified TemperatureData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.TemperatureData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {safevue_edge.Sensor.ITemperatureData} message TemperatureData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TemperatureData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TemperatureData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.TemperatureData} TemperatureData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TemperatureData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.TemperatureData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TemperatureData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.TemperatureData} TemperatureData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TemperatureData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TemperatureData message.
             * @function verify
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TemperatureData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a TemperatureData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.TemperatureData} TemperatureData
             */
            TemperatureData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.TemperatureData)
                    return object;
                var message = new $root.safevue_edge.Sensor.TemperatureData();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a TemperatureData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {safevue_edge.Sensor.TemperatureData} message TemperatureData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TemperatureData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this TemperatureData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.TemperatureData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TemperatureData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TemperatureData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.TemperatureData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TemperatureData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.TemperatureData";
            };

            return TemperatureData;
        })();

        Sensor.WifiData = (function() {

            /**
             * Properties of a WifiData.
             * @memberof safevue_edge.Sensor
             * @interface IWifiData
             * @property {Array.<string>|null} [bssid] WifiData bssid
             * @property {Array.<number>|null} [rssi] WifiData rssi
             */

            /**
             * Constructs a new WifiData.
             * @memberof safevue_edge.Sensor
             * @classdesc Publish WiFi metrics to `dt/watch/{watch-id}/sensor/wifi`
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
             * @implements IWifiData
             * @constructor
             * @param {safevue_edge.Sensor.IWifiData=} [properties] Properties to set
             */
            function WifiData(properties) {
                this.bssid = [];
                this.rssi = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WifiData bssid.
             * @member {Array.<string>} bssid
             * @memberof safevue_edge.Sensor.WifiData
             * @instance
             */
            WifiData.prototype.bssid = $util.emptyArray;

            /**
             * WifiData rssi.
             * @member {Array.<number>} rssi
             * @memberof safevue_edge.Sensor.WifiData
             * @instance
             */
            WifiData.prototype.rssi = $util.emptyArray;

            /**
             * Creates a new WifiData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {safevue_edge.Sensor.IWifiData=} [properties] Properties to set
             * @returns {safevue_edge.Sensor.WifiData} WifiData instance
             */
            WifiData.create = function create(properties) {
                return new WifiData(properties);
            };

            /**
             * Encodes the specified WifiData message. Does not implicitly {@link safevue_edge.Sensor.WifiData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {safevue_edge.Sensor.IWifiData} message WifiData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WifiData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bssid != null && message.bssid.length)
                    for (var i = 0; i < message.bssid.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.bssid[i]);
                if (message.rssi != null && message.rssi.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.rssi.length; ++i)
                        writer.sint32(message.rssi[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified WifiData message, length delimited. Does not implicitly {@link safevue_edge.Sensor.WifiData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {safevue_edge.Sensor.IWifiData} message WifiData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WifiData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WifiData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.Sensor.WifiData} WifiData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WifiData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.Sensor.WifiData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.bssid && message.bssid.length))
                                message.bssid = [];
                            message.bssid.push(reader.string());
                            break;
                        }
                    case 2: {
                            if (!(message.rssi && message.rssi.length))
                                message.rssi = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.rssi.push(reader.sint32());
                            } else
                                message.rssi.push(reader.sint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WifiData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.Sensor.WifiData} WifiData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WifiData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WifiData message.
             * @function verify
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WifiData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bssid != null && message.hasOwnProperty("bssid")) {
                    if (!Array.isArray(message.bssid))
                        return "bssid: array expected";
                    for (var i = 0; i < message.bssid.length; ++i)
                        if (!$util.isString(message.bssid[i]))
                            return "bssid: string[] expected";
                }
                if (message.rssi != null && message.hasOwnProperty("rssi")) {
                    if (!Array.isArray(message.rssi))
                        return "rssi: array expected";
                    for (var i = 0; i < message.rssi.length; ++i)
                        if (!$util.isInteger(message.rssi[i]))
                            return "rssi: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a WifiData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.Sensor.WifiData} WifiData
             */
            WifiData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.Sensor.WifiData)
                    return object;
                var message = new $root.safevue_edge.Sensor.WifiData();
                if (object.bssid) {
                    if (!Array.isArray(object.bssid))
                        throw TypeError(".safevue_edge.Sensor.WifiData.bssid: array expected");
                    message.bssid = [];
                    for (var i = 0; i < object.bssid.length; ++i)
                        message.bssid[i] = String(object.bssid[i]);
                }
                if (object.rssi) {
                    if (!Array.isArray(object.rssi))
                        throw TypeError(".safevue_edge.Sensor.WifiData.rssi: array expected");
                    message.rssi = [];
                    for (var i = 0; i < object.rssi.length; ++i)
                        message.rssi[i] = object.rssi[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a WifiData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {safevue_edge.Sensor.WifiData} message WifiData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WifiData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.bssid = [];
                    object.rssi = [];
                }
                if (message.bssid && message.bssid.length) {
                    object.bssid = [];
                    for (var j = 0; j < message.bssid.length; ++j)
                        object.bssid[j] = message.bssid[j];
                }
                if (message.rssi && message.rssi.length) {
                    object.rssi = [];
                    for (var j = 0; j < message.rssi.length; ++j)
                        object.rssi[j] = message.rssi[j];
                }
                return object;
            };

            /**
             * Converts this WifiData to JSON.
             * @function toJSON
             * @memberof safevue_edge.Sensor.WifiData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WifiData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WifiData
             * @function getTypeUrl
             * @memberof safevue_edge.Sensor.WifiData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WifiData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.Sensor.WifiData";
            };

            return WifiData;
        })();

        return Sensor;
    })();

    safevue_edge.SensorConfigData = (function() {

        /**
         * Properties of a SensorConfigData.
         * @memberof safevue_edge
         * @interface ISensorConfigData
         * @property {number|null} [version] SensorConfigData version
         * @property {number|null} [timestamp] message sent timestamp; unix timestamp in seconds
         * @property {safevue_edge.SensorConfigData.IConfigData|null} [configData] SensorConfigData configData
         */

        /**
         * Constructs a new SensorConfigData.
         * @memberof safevue_edge
         * @classdesc Current sensor config.
         * 
         * Subscribe to `dt/edge/sensor/{sensor-type}/config` to get the current sensor config
         * @implements ISensorConfigData
         * @constructor
         * @param {safevue_edge.ISensorConfigData=} [properties] Properties to set
         */
        function SensorConfigData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SensorConfigData version.
         * @member {number} version
         * @memberof safevue_edge.SensorConfigData
         * @instance
         */
        SensorConfigData.prototype.version = 0;

        /**
         * message sent timestamp; unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.SensorConfigData
         * @instance
         */
        SensorConfigData.prototype.timestamp = 0;

        /**
         * SensorConfigData configData.
         * @member {safevue_edge.SensorConfigData.IConfigData|null|undefined} configData
         * @memberof safevue_edge.SensorConfigData
         * @instance
         */
        SensorConfigData.prototype.configData = null;

        /**
         * Creates a new SensorConfigData instance using the specified properties.
         * @function create
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {safevue_edge.ISensorConfigData=} [properties] Properties to set
         * @returns {safevue_edge.SensorConfigData} SensorConfigData instance
         */
        SensorConfigData.create = function create(properties) {
            return new SensorConfigData(properties);
        };

        /**
         * Encodes the specified SensorConfigData message. Does not implicitly {@link safevue_edge.SensorConfigData.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {safevue_edge.ISensorConfigData} message SensorConfigData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SensorConfigData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.configData != null && Object.hasOwnProperty.call(message, "configData"))
                $root.safevue_edge.SensorConfigData.ConfigData.encode(message.configData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SensorConfigData message, length delimited. Does not implicitly {@link safevue_edge.SensorConfigData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {safevue_edge.ISensorConfigData} message SensorConfigData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SensorConfigData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SensorConfigData message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.SensorConfigData} SensorConfigData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SensorConfigData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.SensorConfigData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.configData = $root.safevue_edge.SensorConfigData.ConfigData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SensorConfigData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.SensorConfigData} SensorConfigData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SensorConfigData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SensorConfigData message.
         * @function verify
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SensorConfigData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.configData != null && message.hasOwnProperty("configData")) {
                var error = $root.safevue_edge.SensorConfigData.ConfigData.verify(message.configData);
                if (error)
                    return "configData." + error;
            }
            return null;
        };

        /**
         * Creates a SensorConfigData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.SensorConfigData} SensorConfigData
         */
        SensorConfigData.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.SensorConfigData)
                return object;
            var message = new $root.safevue_edge.SensorConfigData();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.configData != null) {
                if (typeof object.configData !== "object")
                    throw TypeError(".safevue_edge.SensorConfigData.configData: object expected");
                message.configData = $root.safevue_edge.SensorConfigData.ConfigData.fromObject(object.configData);
            }
            return message;
        };

        /**
         * Creates a plain object from a SensorConfigData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {safevue_edge.SensorConfigData} message SensorConfigData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SensorConfigData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
                object.configData = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.configData != null && message.hasOwnProperty("configData"))
                object.configData = $root.safevue_edge.SensorConfigData.ConfigData.toObject(message.configData, options);
            return object;
        };

        /**
         * Converts this SensorConfigData to JSON.
         * @function toJSON
         * @memberof safevue_edge.SensorConfigData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SensorConfigData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SensorConfigData
         * @function getTypeUrl
         * @memberof safevue_edge.SensorConfigData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SensorConfigData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.SensorConfigData";
        };

        /**
         * SensorType enum.
         * @name safevue_edge.SensorConfigData.SensorType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} BATTERY=1 BATTERY value
         * @property {number} BEACON=2 BEACON value
         * @property {number} GPS=3 GPS value
         * @property {number} HEART_RATE=4 HEART_RATE value
         * @property {number} HUMIDITY=5 HUMIDITY value
         * @property {number} NOISE=6 NOISE value
         * @property {number} SCREEN=7 SCREEN value
         * @property {number} STEPS=8 STEPS value
         * @property {number} TEMPERATURE=9 TEMPERATURE value
         * @property {number} WIFI=10 WIFI value
         */
        SensorConfigData.SensorType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "BATTERY"] = 1;
            values[valuesById[2] = "BEACON"] = 2;
            values[valuesById[3] = "GPS"] = 3;
            values[valuesById[4] = "HEART_RATE"] = 4;
            values[valuesById[5] = "HUMIDITY"] = 5;
            values[valuesById[6] = "NOISE"] = 6;
            values[valuesById[7] = "SCREEN"] = 7;
            values[valuesById[8] = "STEPS"] = 8;
            values[valuesById[9] = "TEMPERATURE"] = 9;
            values[valuesById[10] = "WIFI"] = 10;
            return values;
        })();

        SensorConfigData.ConfigData = (function() {

            /**
             * Properties of a ConfigData.
             * @memberof safevue_edge.SensorConfigData
             * @interface IConfigData
             * @property {safevue_edge.SensorConfigData.SensorType|null} [sensorType] ConfigData sensorType
             * @property {number|null} [readInterval] ConfigData readInterval
             */

            /**
             * Constructs a new ConfigData.
             * @memberof safevue_edge.SensorConfigData
             * @classdesc Represents a ConfigData.
             * @implements IConfigData
             * @constructor
             * @param {safevue_edge.SensorConfigData.IConfigData=} [properties] Properties to set
             */
            function ConfigData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConfigData sensorType.
             * @member {safevue_edge.SensorConfigData.SensorType} sensorType
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @instance
             */
            ConfigData.prototype.sensorType = 0;

            /**
             * ConfigData readInterval.
             * @member {number} readInterval
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @instance
             */
            ConfigData.prototype.readInterval = 0;

            /**
             * Creates a new ConfigData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {safevue_edge.SensorConfigData.IConfigData=} [properties] Properties to set
             * @returns {safevue_edge.SensorConfigData.ConfigData} ConfigData instance
             */
            ConfigData.create = function create(properties) {
                return new ConfigData(properties);
            };

            /**
             * Encodes the specified ConfigData message. Does not implicitly {@link safevue_edge.SensorConfigData.ConfigData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {safevue_edge.SensorConfigData.IConfigData} message ConfigData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConfigData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sensorType != null && Object.hasOwnProperty.call(message, "sensorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sensorType);
                if (message.readInterval != null && Object.hasOwnProperty.call(message, "readInterval"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.readInterval);
                return writer;
            };

            /**
             * Encodes the specified ConfigData message, length delimited. Does not implicitly {@link safevue_edge.SensorConfigData.ConfigData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {safevue_edge.SensorConfigData.IConfigData} message ConfigData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConfigData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConfigData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.SensorConfigData.ConfigData} ConfigData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConfigData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.SensorConfigData.ConfigData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.sensorType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.readInterval = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ConfigData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.SensorConfigData.ConfigData} ConfigData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConfigData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConfigData message.
             * @function verify
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConfigData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sensorType != null && message.hasOwnProperty("sensorType"))
                    switch (message.sensorType) {
                    default:
                        return "sensorType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        break;
                    }
                if (message.readInterval != null && message.hasOwnProperty("readInterval"))
                    if (!$util.isInteger(message.readInterval))
                        return "readInterval: integer expected";
                return null;
            };

            /**
             * Creates a ConfigData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.SensorConfigData.ConfigData} ConfigData
             */
            ConfigData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.SensorConfigData.ConfigData)
                    return object;
                var message = new $root.safevue_edge.SensorConfigData.ConfigData();
                switch (object.sensorType) {
                default:
                    if (typeof object.sensorType === "number") {
                        message.sensorType = object.sensorType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.sensorType = 0;
                    break;
                case "BATTERY":
                case 1:
                    message.sensorType = 1;
                    break;
                case "BEACON":
                case 2:
                    message.sensorType = 2;
                    break;
                case "GPS":
                case 3:
                    message.sensorType = 3;
                    break;
                case "HEART_RATE":
                case 4:
                    message.sensorType = 4;
                    break;
                case "HUMIDITY":
                case 5:
                    message.sensorType = 5;
                    break;
                case "NOISE":
                case 6:
                    message.sensorType = 6;
                    break;
                case "SCREEN":
                case 7:
                    message.sensorType = 7;
                    break;
                case "STEPS":
                case 8:
                    message.sensorType = 8;
                    break;
                case "TEMPERATURE":
                case 9:
                    message.sensorType = 9;
                    break;
                case "WIFI":
                case 10:
                    message.sensorType = 10;
                    break;
                }
                if (object.readInterval != null)
                    message.readInterval = object.readInterval | 0;
                return message;
            };

            /**
             * Creates a plain object from a ConfigData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {safevue_edge.SensorConfigData.ConfigData} message ConfigData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConfigData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.sensorType = options.enums === String ? "UNKNOWN" : 0;
                    object.readInterval = 0;
                }
                if (message.sensorType != null && message.hasOwnProperty("sensorType"))
                    object.sensorType = options.enums === String ? $root.safevue_edge.SensorConfigData.SensorType[message.sensorType] === undefined ? message.sensorType : $root.safevue_edge.SensorConfigData.SensorType[message.sensorType] : message.sensorType;
                if (message.readInterval != null && message.hasOwnProperty("readInterval"))
                    object.readInterval = message.readInterval;
                return object;
            };

            /**
             * Converts this ConfigData to JSON.
             * @function toJSON
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConfigData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConfigData
             * @function getTypeUrl
             * @memberof safevue_edge.SensorConfigData.ConfigData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConfigData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.SensorConfigData.ConfigData";
            };

            return ConfigData;
        })();

        return SensorConfigData;
    })();

    safevue_edge.CrewAssistAckData = (function() {

        /**
         * Properties of a CrewAssistAckData.
         * @memberof safevue_edge
         * @interface ICrewAssistAckData
         * @property {number|null} [version] CrewAssistAckData version
         * @property {number|null} [timestamp] message sent timestamp; unix timestamp in seconds
         * @property {safevue_edge.CrewAssistAckData.IAckData|null} [ackData] CrewAssistAckData ackData
         */

        /**
         * Constructs a new CrewAssistAckData.
         * @memberof safevue_edge
         * @classdesc Represents a CrewAssistAckData.
         * @implements ICrewAssistAckData
         * @constructor
         * @param {safevue_edge.ICrewAssistAckData=} [properties] Properties to set
         */
        function CrewAssistAckData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CrewAssistAckData version.
         * @member {number} version
         * @memberof safevue_edge.CrewAssistAckData
         * @instance
         */
        CrewAssistAckData.prototype.version = 0;

        /**
         * message sent timestamp; unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.CrewAssistAckData
         * @instance
         */
        CrewAssistAckData.prototype.timestamp = 0;

        /**
         * CrewAssistAckData ackData.
         * @member {safevue_edge.CrewAssistAckData.IAckData|null|undefined} ackData
         * @memberof safevue_edge.CrewAssistAckData
         * @instance
         */
        CrewAssistAckData.prototype.ackData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CrewAssistAckData data.
         * @member {"ackData"|undefined} data
         * @memberof safevue_edge.CrewAssistAckData
         * @instance
         */
        Object.defineProperty(CrewAssistAckData.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["ackData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CrewAssistAckData instance using the specified properties.
         * @function create
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {safevue_edge.ICrewAssistAckData=} [properties] Properties to set
         * @returns {safevue_edge.CrewAssistAckData} CrewAssistAckData instance
         */
        CrewAssistAckData.create = function create(properties) {
            return new CrewAssistAckData(properties);
        };

        /**
         * Encodes the specified CrewAssistAckData message. Does not implicitly {@link safevue_edge.CrewAssistAckData.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {safevue_edge.ICrewAssistAckData} message CrewAssistAckData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CrewAssistAckData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.ackData != null && Object.hasOwnProperty.call(message, "ackData"))
                $root.safevue_edge.CrewAssistAckData.AckData.encode(message.ackData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CrewAssistAckData message, length delimited. Does not implicitly {@link safevue_edge.CrewAssistAckData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {safevue_edge.ICrewAssistAckData} message CrewAssistAckData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CrewAssistAckData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CrewAssistAckData message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.CrewAssistAckData} CrewAssistAckData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CrewAssistAckData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.CrewAssistAckData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.ackData = $root.safevue_edge.CrewAssistAckData.AckData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CrewAssistAckData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.CrewAssistAckData} CrewAssistAckData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CrewAssistAckData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CrewAssistAckData message.
         * @function verify
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CrewAssistAckData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.ackData != null && message.hasOwnProperty("ackData")) {
                properties.data = 1;
                {
                    var error = $root.safevue_edge.CrewAssistAckData.AckData.verify(message.ackData);
                    if (error)
                        return "ackData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CrewAssistAckData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.CrewAssistAckData} CrewAssistAckData
         */
        CrewAssistAckData.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.CrewAssistAckData)
                return object;
            var message = new $root.safevue_edge.CrewAssistAckData();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.ackData != null) {
                if (typeof object.ackData !== "object")
                    throw TypeError(".safevue_edge.CrewAssistAckData.ackData: object expected");
                message.ackData = $root.safevue_edge.CrewAssistAckData.AckData.fromObject(object.ackData);
            }
            return message;
        };

        /**
         * Creates a plain object from a CrewAssistAckData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {safevue_edge.CrewAssistAckData} message CrewAssistAckData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CrewAssistAckData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.ackData != null && message.hasOwnProperty("ackData")) {
                object.ackData = $root.safevue_edge.CrewAssistAckData.AckData.toObject(message.ackData, options);
                if (options.oneofs)
                    object.data = "ackData";
            }
            return object;
        };

        /**
         * Converts this CrewAssistAckData to JSON.
         * @function toJSON
         * @memberof safevue_edge.CrewAssistAckData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CrewAssistAckData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CrewAssistAckData
         * @function getTypeUrl
         * @memberof safevue_edge.CrewAssistAckData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CrewAssistAckData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.CrewAssistAckData";
        };

        CrewAssistAckData.AckData = (function() {

            /**
             * Properties of an AckData.
             * @memberof safevue_edge.CrewAssistAckData
             * @interface IAckData
             * @property {string|null} [id] Alert id
             * @property {string|null} [acknowledgerId] AckData acknowledgerId
             * @property {string|null} [acknowledgerName] AckData acknowledgerName
             */

            /**
             * Constructs a new AckData.
             * @memberof safevue_edge.CrewAssistAckData
             * @classdesc Represents an AckData.
             * @implements IAckData
             * @constructor
             * @param {safevue_edge.CrewAssistAckData.IAckData=} [properties] Properties to set
             */
            function AckData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Alert id
             * @member {string} id
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @instance
             */
            AckData.prototype.id = "";

            /**
             * AckData acknowledgerId.
             * @member {string} acknowledgerId
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @instance
             */
            AckData.prototype.acknowledgerId = "";

            /**
             * AckData acknowledgerName.
             * @member {string} acknowledgerName
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @instance
             */
            AckData.prototype.acknowledgerName = "";

            /**
             * Creates a new AckData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {safevue_edge.CrewAssistAckData.IAckData=} [properties] Properties to set
             * @returns {safevue_edge.CrewAssistAckData.AckData} AckData instance
             */
            AckData.create = function create(properties) {
                return new AckData(properties);
            };

            /**
             * Encodes the specified AckData message. Does not implicitly {@link safevue_edge.CrewAssistAckData.AckData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {safevue_edge.CrewAssistAckData.IAckData} message AckData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AckData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.acknowledgerId != null && Object.hasOwnProperty.call(message, "acknowledgerId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.acknowledgerId);
                if (message.acknowledgerName != null && Object.hasOwnProperty.call(message, "acknowledgerName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.acknowledgerName);
                return writer;
            };

            /**
             * Encodes the specified AckData message, length delimited. Does not implicitly {@link safevue_edge.CrewAssistAckData.AckData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {safevue_edge.CrewAssistAckData.IAckData} message AckData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AckData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AckData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.CrewAssistAckData.AckData} AckData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AckData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.CrewAssistAckData.AckData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.acknowledgerId = reader.string();
                            break;
                        }
                    case 3: {
                            message.acknowledgerName = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AckData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.CrewAssistAckData.AckData} AckData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AckData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AckData message.
             * @function verify
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AckData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.acknowledgerId != null && message.hasOwnProperty("acknowledgerId"))
                    if (!$util.isString(message.acknowledgerId))
                        return "acknowledgerId: string expected";
                if (message.acknowledgerName != null && message.hasOwnProperty("acknowledgerName"))
                    if (!$util.isString(message.acknowledgerName))
                        return "acknowledgerName: string expected";
                return null;
            };

            /**
             * Creates an AckData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.CrewAssistAckData.AckData} AckData
             */
            AckData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.CrewAssistAckData.AckData)
                    return object;
                var message = new $root.safevue_edge.CrewAssistAckData.AckData();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.acknowledgerId != null)
                    message.acknowledgerId = String(object.acknowledgerId);
                if (object.acknowledgerName != null)
                    message.acknowledgerName = String(object.acknowledgerName);
                return message;
            };

            /**
             * Creates a plain object from an AckData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {safevue_edge.CrewAssistAckData.AckData} message AckData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AckData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.acknowledgerId = "";
                    object.acknowledgerName = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.acknowledgerId != null && message.hasOwnProperty("acknowledgerId"))
                    object.acknowledgerId = message.acknowledgerId;
                if (message.acknowledgerName != null && message.hasOwnProperty("acknowledgerName"))
                    object.acknowledgerName = message.acknowledgerName;
                return object;
            };

            /**
             * Converts this AckData to JSON.
             * @function toJSON
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AckData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AckData
             * @function getTypeUrl
             * @memberof safevue_edge.CrewAssistAckData.AckData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AckData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.CrewAssistAckData.AckData";
            };

            return AckData;
        })();

        return CrewAssistAckData;
    })();

    safevue_edge.ActiveGeofenceData = (function() {

        /**
         * Properties of an ActiveGeofenceData.
         * @memberof safevue_edge
         * @interface IActiveGeofenceData
         * @property {number|null} [version] ActiveGeofenceData version
         * @property {number|null} [timestamp] message sent timestamp; unix timestamp in seconds
         * @property {Array.<safevue_edge.ActiveGeofenceData.IGeofenceData>|null} [geofenceData] ActiveGeofenceData geofenceData
         */

        /**
         * Constructs a new ActiveGeofenceData.
         * @memberof safevue_edge
         * @classdesc Represents an ActiveGeofenceData.
         * @implements IActiveGeofenceData
         * @constructor
         * @param {safevue_edge.IActiveGeofenceData=} [properties] Properties to set
         */
        function ActiveGeofenceData(properties) {
            this.geofenceData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActiveGeofenceData version.
         * @member {number} version
         * @memberof safevue_edge.ActiveGeofenceData
         * @instance
         */
        ActiveGeofenceData.prototype.version = 0;

        /**
         * message sent timestamp; unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.ActiveGeofenceData
         * @instance
         */
        ActiveGeofenceData.prototype.timestamp = 0;

        /**
         * ActiveGeofenceData geofenceData.
         * @member {Array.<safevue_edge.ActiveGeofenceData.IGeofenceData>} geofenceData
         * @memberof safevue_edge.ActiveGeofenceData
         * @instance
         */
        ActiveGeofenceData.prototype.geofenceData = $util.emptyArray;

        /**
         * Creates a new ActiveGeofenceData instance using the specified properties.
         * @function create
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {safevue_edge.IActiveGeofenceData=} [properties] Properties to set
         * @returns {safevue_edge.ActiveGeofenceData} ActiveGeofenceData instance
         */
        ActiveGeofenceData.create = function create(properties) {
            return new ActiveGeofenceData(properties);
        };

        /**
         * Encodes the specified ActiveGeofenceData message. Does not implicitly {@link safevue_edge.ActiveGeofenceData.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {safevue_edge.IActiveGeofenceData} message ActiveGeofenceData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActiveGeofenceData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.geofenceData != null && message.geofenceData.length)
                for (var i = 0; i < message.geofenceData.length; ++i)
                    $root.safevue_edge.ActiveGeofenceData.GeofenceData.encode(message.geofenceData[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ActiveGeofenceData message, length delimited. Does not implicitly {@link safevue_edge.ActiveGeofenceData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {safevue_edge.IActiveGeofenceData} message ActiveGeofenceData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActiveGeofenceData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActiveGeofenceData message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.ActiveGeofenceData} ActiveGeofenceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActiveGeofenceData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.ActiveGeofenceData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        if (!(message.geofenceData && message.geofenceData.length))
                            message.geofenceData = [];
                        message.geofenceData.push($root.safevue_edge.ActiveGeofenceData.GeofenceData.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActiveGeofenceData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.ActiveGeofenceData} ActiveGeofenceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActiveGeofenceData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActiveGeofenceData message.
         * @function verify
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActiveGeofenceData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.geofenceData != null && message.hasOwnProperty("geofenceData")) {
                if (!Array.isArray(message.geofenceData))
                    return "geofenceData: array expected";
                for (var i = 0; i < message.geofenceData.length; ++i) {
                    var error = $root.safevue_edge.ActiveGeofenceData.GeofenceData.verify(message.geofenceData[i]);
                    if (error)
                        return "geofenceData." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ActiveGeofenceData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.ActiveGeofenceData} ActiveGeofenceData
         */
        ActiveGeofenceData.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.ActiveGeofenceData)
                return object;
            var message = new $root.safevue_edge.ActiveGeofenceData();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.geofenceData) {
                if (!Array.isArray(object.geofenceData))
                    throw TypeError(".safevue_edge.ActiveGeofenceData.geofenceData: array expected");
                message.geofenceData = [];
                for (var i = 0; i < object.geofenceData.length; ++i) {
                    if (typeof object.geofenceData[i] !== "object")
                        throw TypeError(".safevue_edge.ActiveGeofenceData.geofenceData: object expected");
                    message.geofenceData[i] = $root.safevue_edge.ActiveGeofenceData.GeofenceData.fromObject(object.geofenceData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ActiveGeofenceData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {safevue_edge.ActiveGeofenceData} message ActiveGeofenceData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActiveGeofenceData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.geofenceData = [];
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.geofenceData && message.geofenceData.length) {
                object.geofenceData = [];
                for (var j = 0; j < message.geofenceData.length; ++j)
                    object.geofenceData[j] = $root.safevue_edge.ActiveGeofenceData.GeofenceData.toObject(message.geofenceData[j], options);
            }
            return object;
        };

        /**
         * Converts this ActiveGeofenceData to JSON.
         * @function toJSON
         * @memberof safevue_edge.ActiveGeofenceData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActiveGeofenceData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ActiveGeofenceData
         * @function getTypeUrl
         * @memberof safevue_edge.ActiveGeofenceData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ActiveGeofenceData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.ActiveGeofenceData";
        };

        ActiveGeofenceData.GeofenceData = (function() {

            /**
             * Properties of a GeofenceData.
             * @memberof safevue_edge.ActiveGeofenceData
             * @interface IGeofenceData
             * @property {string|null} [id] GeofenceData id
             * @property {string|null} [creatorId] GeofenceData creatorId
             * @property {string|null} [creatorName] GeofenceData creatorName
             * @property {string|null} [title] GeofenceData title
             * @property {string|null} [description] GeofenceData description
             * @property {Array.<Uint8Array>|null} [beaconMacs] GeofenceData beaconMacs
             * @property {Array.<string>|null} [allowedIds] GeofenceData allowedIds
             */

            /**
             * Constructs a new GeofenceData.
             * @memberof safevue_edge.ActiveGeofenceData
             * @classdesc Represents a GeofenceData.
             * @implements IGeofenceData
             * @constructor
             * @param {safevue_edge.ActiveGeofenceData.IGeofenceData=} [properties] Properties to set
             */
            function GeofenceData(properties) {
                this.beaconMacs = [];
                this.allowedIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeofenceData id.
             * @member {string} id
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             */
            GeofenceData.prototype.id = "";

            /**
             * GeofenceData creatorId.
             * @member {string} creatorId
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             */
            GeofenceData.prototype.creatorId = "";

            /**
             * GeofenceData creatorName.
             * @member {string} creatorName
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             */
            GeofenceData.prototype.creatorName = "";

            /**
             * GeofenceData title.
             * @member {string} title
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             */
            GeofenceData.prototype.title = "";

            /**
             * GeofenceData description.
             * @member {string} description
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             */
            GeofenceData.prototype.description = "";

            /**
             * GeofenceData beaconMacs.
             * @member {Array.<Uint8Array>} beaconMacs
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             */
            GeofenceData.prototype.beaconMacs = $util.emptyArray;

            /**
             * GeofenceData allowedIds.
             * @member {Array.<string>} allowedIds
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             */
            GeofenceData.prototype.allowedIds = $util.emptyArray;

            /**
             * Creates a new GeofenceData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {safevue_edge.ActiveGeofenceData.IGeofenceData=} [properties] Properties to set
             * @returns {safevue_edge.ActiveGeofenceData.GeofenceData} GeofenceData instance
             */
            GeofenceData.create = function create(properties) {
                return new GeofenceData(properties);
            };

            /**
             * Encodes the specified GeofenceData message. Does not implicitly {@link safevue_edge.ActiveGeofenceData.GeofenceData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {safevue_edge.ActiveGeofenceData.IGeofenceData} message GeofenceData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeofenceData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.creatorId);
                if (message.creatorName != null && Object.hasOwnProperty.call(message, "creatorName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorName);
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                if (message.beaconMacs != null && message.beaconMacs.length)
                    for (var i = 0; i < message.beaconMacs.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.beaconMacs[i]);
                if (message.allowedIds != null && message.allowedIds.length)
                    for (var i = 0; i < message.allowedIds.length; ++i)
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.allowedIds[i]);
                return writer;
            };

            /**
             * Encodes the specified GeofenceData message, length delimited. Does not implicitly {@link safevue_edge.ActiveGeofenceData.GeofenceData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {safevue_edge.ActiveGeofenceData.IGeofenceData} message GeofenceData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeofenceData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeofenceData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.ActiveGeofenceData.GeofenceData} GeofenceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeofenceData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.ActiveGeofenceData.GeofenceData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.creatorId = reader.string();
                            break;
                        }
                    case 3: {
                            message.creatorName = reader.string();
                            break;
                        }
                    case 4: {
                            message.title = reader.string();
                            break;
                        }
                    case 5: {
                            message.description = reader.string();
                            break;
                        }
                    case 6: {
                            if (!(message.beaconMacs && message.beaconMacs.length))
                                message.beaconMacs = [];
                            message.beaconMacs.push(reader.bytes());
                            break;
                        }
                    case 7: {
                            if (!(message.allowedIds && message.allowedIds.length))
                                message.allowedIds = [];
                            message.allowedIds.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeofenceData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.ActiveGeofenceData.GeofenceData} GeofenceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeofenceData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeofenceData message.
             * @function verify
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeofenceData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    if (!$util.isString(message.creatorId))
                        return "creatorId: string expected";
                if (message.creatorName != null && message.hasOwnProperty("creatorName"))
                    if (!$util.isString(message.creatorName))
                        return "creatorName: string expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.beaconMacs != null && message.hasOwnProperty("beaconMacs")) {
                    if (!Array.isArray(message.beaconMacs))
                        return "beaconMacs: array expected";
                    for (var i = 0; i < message.beaconMacs.length; ++i)
                        if (!(message.beaconMacs[i] && typeof message.beaconMacs[i].length === "number" || $util.isString(message.beaconMacs[i])))
                            return "beaconMacs: buffer[] expected";
                }
                if (message.allowedIds != null && message.hasOwnProperty("allowedIds")) {
                    if (!Array.isArray(message.allowedIds))
                        return "allowedIds: array expected";
                    for (var i = 0; i < message.allowedIds.length; ++i)
                        if (!$util.isString(message.allowedIds[i]))
                            return "allowedIds: string[] expected";
                }
                return null;
            };

            /**
             * Creates a GeofenceData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.ActiveGeofenceData.GeofenceData} GeofenceData
             */
            GeofenceData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.ActiveGeofenceData.GeofenceData)
                    return object;
                var message = new $root.safevue_edge.ActiveGeofenceData.GeofenceData();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.creatorId != null)
                    message.creatorId = String(object.creatorId);
                if (object.creatorName != null)
                    message.creatorName = String(object.creatorName);
                if (object.title != null)
                    message.title = String(object.title);
                if (object.description != null)
                    message.description = String(object.description);
                if (object.beaconMacs) {
                    if (!Array.isArray(object.beaconMacs))
                        throw TypeError(".safevue_edge.ActiveGeofenceData.GeofenceData.beaconMacs: array expected");
                    message.beaconMacs = [];
                    for (var i = 0; i < object.beaconMacs.length; ++i)
                        if (typeof object.beaconMacs[i] === "string")
                            $util.base64.decode(object.beaconMacs[i], message.beaconMacs[i] = $util.newBuffer($util.base64.length(object.beaconMacs[i])), 0);
                        else if (object.beaconMacs[i].length >= 0)
                            message.beaconMacs[i] = object.beaconMacs[i];
                }
                if (object.allowedIds) {
                    if (!Array.isArray(object.allowedIds))
                        throw TypeError(".safevue_edge.ActiveGeofenceData.GeofenceData.allowedIds: array expected");
                    message.allowedIds = [];
                    for (var i = 0; i < object.allowedIds.length; ++i)
                        message.allowedIds[i] = String(object.allowedIds[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a GeofenceData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {safevue_edge.ActiveGeofenceData.GeofenceData} message GeofenceData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeofenceData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.beaconMacs = [];
                    object.allowedIds = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.creatorId = "";
                    object.creatorName = "";
                    object.title = "";
                    object.description = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                    object.creatorId = message.creatorId;
                if (message.creatorName != null && message.hasOwnProperty("creatorName"))
                    object.creatorName = message.creatorName;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                if (message.beaconMacs && message.beaconMacs.length) {
                    object.beaconMacs = [];
                    for (var j = 0; j < message.beaconMacs.length; ++j)
                        object.beaconMacs[j] = options.bytes === String ? $util.base64.encode(message.beaconMacs[j], 0, message.beaconMacs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.beaconMacs[j]) : message.beaconMacs[j];
                }
                if (message.allowedIds && message.allowedIds.length) {
                    object.allowedIds = [];
                    for (var j = 0; j < message.allowedIds.length; ++j)
                        object.allowedIds[j] = message.allowedIds[j];
                }
                return object;
            };

            /**
             * Converts this GeofenceData to JSON.
             * @function toJSON
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeofenceData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GeofenceData
             * @function getTypeUrl
             * @memberof safevue_edge.ActiveGeofenceData.GeofenceData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GeofenceData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.ActiveGeofenceData.GeofenceData";
            };

            return GeofenceData;
        })();

        return ActiveGeofenceData;
    })();

    safevue_edge.BroadcastMessageData = (function() {

        /**
         * Properties of a BroadcastMessageData.
         * @memberof safevue_edge
         * @interface IBroadcastMessageData
         * @property {number|null} [version] BroadcastMessageData version
         * @property {number|null} [timestamp] message sent timestamp; unix timestamp in seconds
         * @property {safevue_edge.BroadcastMessageData.IMessageData|null} [messageData] BroadcastMessageData messageData
         */

        /**
         * Constructs a new BroadcastMessageData.
         * @memberof safevue_edge
         * @classdesc Represents a BroadcastMessageData.
         * @implements IBroadcastMessageData
         * @constructor
         * @param {safevue_edge.IBroadcastMessageData=} [properties] Properties to set
         */
        function BroadcastMessageData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastMessageData version.
         * @member {number} version
         * @memberof safevue_edge.BroadcastMessageData
         * @instance
         */
        BroadcastMessageData.prototype.version = 0;

        /**
         * message sent timestamp; unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.BroadcastMessageData
         * @instance
         */
        BroadcastMessageData.prototype.timestamp = 0;

        /**
         * BroadcastMessageData messageData.
         * @member {safevue_edge.BroadcastMessageData.IMessageData|null|undefined} messageData
         * @memberof safevue_edge.BroadcastMessageData
         * @instance
         */
        BroadcastMessageData.prototype.messageData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BroadcastMessageData data.
         * @member {"messageData"|undefined} data
         * @memberof safevue_edge.BroadcastMessageData
         * @instance
         */
        Object.defineProperty(BroadcastMessageData.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["messageData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BroadcastMessageData instance using the specified properties.
         * @function create
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {safevue_edge.IBroadcastMessageData=} [properties] Properties to set
         * @returns {safevue_edge.BroadcastMessageData} BroadcastMessageData instance
         */
        BroadcastMessageData.create = function create(properties) {
            return new BroadcastMessageData(properties);
        };

        /**
         * Encodes the specified BroadcastMessageData message. Does not implicitly {@link safevue_edge.BroadcastMessageData.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {safevue_edge.IBroadcastMessageData} message BroadcastMessageData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastMessageData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.messageData != null && Object.hasOwnProperty.call(message, "messageData"))
                $root.safevue_edge.BroadcastMessageData.MessageData.encode(message.messageData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastMessageData message, length delimited. Does not implicitly {@link safevue_edge.BroadcastMessageData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {safevue_edge.IBroadcastMessageData} message BroadcastMessageData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastMessageData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastMessageData message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.BroadcastMessageData} BroadcastMessageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastMessageData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.BroadcastMessageData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.messageData = $root.safevue_edge.BroadcastMessageData.MessageData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastMessageData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.BroadcastMessageData} BroadcastMessageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastMessageData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastMessageData message.
         * @function verify
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastMessageData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.messageData != null && message.hasOwnProperty("messageData")) {
                properties.data = 1;
                {
                    var error = $root.safevue_edge.BroadcastMessageData.MessageData.verify(message.messageData);
                    if (error)
                        return "messageData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BroadcastMessageData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.BroadcastMessageData} BroadcastMessageData
         */
        BroadcastMessageData.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.BroadcastMessageData)
                return object;
            var message = new $root.safevue_edge.BroadcastMessageData();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.messageData != null) {
                if (typeof object.messageData !== "object")
                    throw TypeError(".safevue_edge.BroadcastMessageData.messageData: object expected");
                message.messageData = $root.safevue_edge.BroadcastMessageData.MessageData.fromObject(object.messageData);
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastMessageData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {safevue_edge.BroadcastMessageData} message BroadcastMessageData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastMessageData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.messageData != null && message.hasOwnProperty("messageData")) {
                object.messageData = $root.safevue_edge.BroadcastMessageData.MessageData.toObject(message.messageData, options);
                if (options.oneofs)
                    object.data = "messageData";
            }
            return object;
        };

        /**
         * Converts this BroadcastMessageData to JSON.
         * @function toJSON
         * @memberof safevue_edge.BroadcastMessageData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastMessageData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BroadcastMessageData
         * @function getTypeUrl
         * @memberof safevue_edge.BroadcastMessageData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BroadcastMessageData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.BroadcastMessageData";
        };

        BroadcastMessageData.MessageData = (function() {

            /**
             * Properties of a MessageData.
             * @memberof safevue_edge.BroadcastMessageData
             * @interface IMessageData
             * @property {string|null} [id] MessageData id
             * @property {string|null} [senderId] MessageData senderId
             * @property {string|null} [senderName] MessageData senderName
             * @property {string|null} [message] MessageData message
             */

            /**
             * Constructs a new MessageData.
             * @memberof safevue_edge.BroadcastMessageData
             * @classdesc Represents a MessageData.
             * @implements IMessageData
             * @constructor
             * @param {safevue_edge.BroadcastMessageData.IMessageData=} [properties] Properties to set
             */
            function MessageData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageData id.
             * @member {string} id
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @instance
             */
            MessageData.prototype.id = "";

            /**
             * MessageData senderId.
             * @member {string} senderId
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @instance
             */
            MessageData.prototype.senderId = "";

            /**
             * MessageData senderName.
             * @member {string} senderName
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @instance
             */
            MessageData.prototype.senderName = "";

            /**
             * MessageData message.
             * @member {string} message
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @instance
             */
            MessageData.prototype.message = "";

            /**
             * Creates a new MessageData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {safevue_edge.BroadcastMessageData.IMessageData=} [properties] Properties to set
             * @returns {safevue_edge.BroadcastMessageData.MessageData} MessageData instance
             */
            MessageData.create = function create(properties) {
                return new MessageData(properties);
            };

            /**
             * Encodes the specified MessageData message. Does not implicitly {@link safevue_edge.BroadcastMessageData.MessageData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {safevue_edge.BroadcastMessageData.IMessageData} message MessageData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderId);
                if (message.senderName != null && Object.hasOwnProperty.call(message, "senderName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.senderName);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified MessageData message, length delimited. Does not implicitly {@link safevue_edge.BroadcastMessageData.MessageData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {safevue_edge.BroadcastMessageData.IMessageData} message MessageData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.BroadcastMessageData.MessageData} MessageData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.BroadcastMessageData.MessageData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.senderId = reader.string();
                            break;
                        }
                    case 3: {
                            message.senderName = reader.string();
                            break;
                        }
                    case 4: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.BroadcastMessageData.MessageData} MessageData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageData message.
             * @function verify
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    if (!$util.isString(message.senderId))
                        return "senderId: string expected";
                if (message.senderName != null && message.hasOwnProperty("senderName"))
                    if (!$util.isString(message.senderName))
                        return "senderName: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a MessageData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.BroadcastMessageData.MessageData} MessageData
             */
            MessageData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.BroadcastMessageData.MessageData)
                    return object;
                var message = new $root.safevue_edge.BroadcastMessageData.MessageData();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.senderId != null)
                    message.senderId = String(object.senderId);
                if (object.senderName != null)
                    message.senderName = String(object.senderName);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a MessageData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {safevue_edge.BroadcastMessageData.MessageData} message MessageData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.senderId = "";
                    object.senderName = "";
                    object.message = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    object.senderId = message.senderId;
                if (message.senderName != null && message.hasOwnProperty("senderName"))
                    object.senderName = message.senderName;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this MessageData to JSON.
             * @function toJSON
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageData
             * @function getTypeUrl
             * @memberof safevue_edge.BroadcastMessageData.MessageData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.BroadcastMessageData.MessageData";
            };

            return MessageData;
        })();

        return BroadcastMessageData;
    })();

    safevue_edge.CurrentUserData = (function() {

        /**
         * Properties of a CurrentUserData.
         * @memberof safevue_edge
         * @interface ICurrentUserData
         * @property {number|null} [version] CurrentUserData version
         * @property {number|null} [timestamp] message sent timestamp; unix timestamp in seconds
         * @property {safevue_edge.CurrentUserData.IUserData|null} [userData] `user_data` will be empty if the watch is not assigned to any user.
         */

        /**
         * Constructs a new CurrentUserData.
         * @memberof safevue_edge
         * @classdesc Current watch user.
         * 
         * Subscribe to `dt/watch/{watchId}/user` to get the current user for the device
         * @implements ICurrentUserData
         * @constructor
         * @param {safevue_edge.ICurrentUserData=} [properties] Properties to set
         */
        function CurrentUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrentUserData version.
         * @member {number} version
         * @memberof safevue_edge.CurrentUserData
         * @instance
         */
        CurrentUserData.prototype.version = 0;

        /**
         * message sent timestamp; unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.CurrentUserData
         * @instance
         */
        CurrentUserData.prototype.timestamp = 0;

        /**
         * `user_data` will be empty if the watch is not assigned to any user.
         * @member {safevue_edge.CurrentUserData.IUserData|null|undefined} userData
         * @memberof safevue_edge.CurrentUserData
         * @instance
         */
        CurrentUserData.prototype.userData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CurrentUserData _userData.
         * @member {"userData"|undefined} _userData
         * @memberof safevue_edge.CurrentUserData
         * @instance
         */
        Object.defineProperty(CurrentUserData.prototype, "_userData", {
            get: $util.oneOfGetter($oneOfFields = ["userData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CurrentUserData instance using the specified properties.
         * @function create
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {safevue_edge.ICurrentUserData=} [properties] Properties to set
         * @returns {safevue_edge.CurrentUserData} CurrentUserData instance
         */
        CurrentUserData.create = function create(properties) {
            return new CurrentUserData(properties);
        };

        /**
         * Encodes the specified CurrentUserData message. Does not implicitly {@link safevue_edge.CurrentUserData.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {safevue_edge.ICurrentUserData} message CurrentUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrentUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.userData != null && Object.hasOwnProperty.call(message, "userData"))
                $root.safevue_edge.CurrentUserData.UserData.encode(message.userData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CurrentUserData message, length delimited. Does not implicitly {@link safevue_edge.CurrentUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {safevue_edge.ICurrentUserData} message CurrentUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrentUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrentUserData message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.CurrentUserData} CurrentUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrentUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.CurrentUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.userData = $root.safevue_edge.CurrentUserData.UserData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurrentUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.CurrentUserData} CurrentUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrentUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrentUserData message.
         * @function verify
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrentUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.userData != null && message.hasOwnProperty("userData")) {
                properties._userData = 1;
                {
                    var error = $root.safevue_edge.CurrentUserData.UserData.verify(message.userData);
                    if (error)
                        return "userData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CurrentUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.CurrentUserData} CurrentUserData
         */
        CurrentUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.CurrentUserData)
                return object;
            var message = new $root.safevue_edge.CurrentUserData();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.userData != null) {
                if (typeof object.userData !== "object")
                    throw TypeError(".safevue_edge.CurrentUserData.userData: object expected");
                message.userData = $root.safevue_edge.CurrentUserData.UserData.fromObject(object.userData);
            }
            return message;
        };

        /**
         * Creates a plain object from a CurrentUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {safevue_edge.CurrentUserData} message CurrentUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrentUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.userData != null && message.hasOwnProperty("userData")) {
                object.userData = $root.safevue_edge.CurrentUserData.UserData.toObject(message.userData, options);
                if (options.oneofs)
                    object._userData = "userData";
            }
            return object;
        };

        /**
         * Converts this CurrentUserData to JSON.
         * @function toJSON
         * @memberof safevue_edge.CurrentUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrentUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CurrentUserData
         * @function getTypeUrl
         * @memberof safevue_edge.CurrentUserData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CurrentUserData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.CurrentUserData";
        };

        CurrentUserData.UserData = (function() {

            /**
             * Properties of a UserData.
             * @memberof safevue_edge.CurrentUserData
             * @interface IUserData
             * @property {string|null} [userId] UserData userId
             * @property {string|null} [userName] UserData userName
             * @property {number|null} [dob] date of birth; 1970-12-31 will be encoded as 19701231
             */

            /**
             * Constructs a new UserData.
             * @memberof safevue_edge.CurrentUserData
             * @classdesc Represents a UserData.
             * @implements IUserData
             * @constructor
             * @param {safevue_edge.CurrentUserData.IUserData=} [properties] Properties to set
             */
            function UserData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserData userId.
             * @member {string} userId
             * @memberof safevue_edge.CurrentUserData.UserData
             * @instance
             */
            UserData.prototype.userId = "";

            /**
             * UserData userName.
             * @member {string} userName
             * @memberof safevue_edge.CurrentUserData.UserData
             * @instance
             */
            UserData.prototype.userName = "";

            /**
             * date of birth; 1970-12-31 will be encoded as 19701231
             * @member {number} dob
             * @memberof safevue_edge.CurrentUserData.UserData
             * @instance
             */
            UserData.prototype.dob = 0;

            /**
             * Creates a new UserData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {safevue_edge.CurrentUserData.IUserData=} [properties] Properties to set
             * @returns {safevue_edge.CurrentUserData.UserData} UserData instance
             */
            UserData.create = function create(properties) {
                return new UserData(properties);
            };

            /**
             * Encodes the specified UserData message. Does not implicitly {@link safevue_edge.CurrentUserData.UserData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {safevue_edge.CurrentUserData.IUserData} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
                if (message.dob != null && Object.hasOwnProperty.call(message, "dob"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.dob);
                return writer;
            };

            /**
             * Encodes the specified UserData message, length delimited. Does not implicitly {@link safevue_edge.CurrentUserData.UserData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {safevue_edge.CurrentUserData.IUserData} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.CurrentUserData.UserData} UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.CurrentUserData.UserData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.string();
                            break;
                        }
                    case 2: {
                            message.userName = reader.string();
                            break;
                        }
                    case 3: {
                            message.dob = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.CurrentUserData.UserData} UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserData message.
             * @function verify
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.dob != null && message.hasOwnProperty("dob"))
                    if (!$util.isInteger(message.dob))
                        return "dob: integer expected";
                return null;
            };

            /**
             * Creates a UserData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.CurrentUserData.UserData} UserData
             */
            UserData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.CurrentUserData.UserData)
                    return object;
                var message = new $root.safevue_edge.CurrentUserData.UserData();
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.dob != null)
                    message.dob = object.dob >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UserData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {safevue_edge.CurrentUserData.UserData} message UserData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = "";
                    object.userName = "";
                    object.dob = 0;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.dob != null && message.hasOwnProperty("dob"))
                    object.dob = message.dob;
                return object;
            };

            /**
             * Converts this UserData to JSON.
             * @function toJSON
             * @memberof safevue_edge.CurrentUserData.UserData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserData
             * @function getTypeUrl
             * @memberof safevue_edge.CurrentUserData.UserData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.CurrentUserData.UserData";
            };

            return UserData;
        })();

        return CurrentUserData;
    })();

    safevue_edge.EdgeTimeData = (function() {

        /**
         * Properties of an EdgeTimeData.
         * @memberof safevue_edge
         * @interface IEdgeTimeData
         * @property {number|null} [version] EdgeTimeData version
         * @property {safevue_edge.EdgeTimeData.ITimeData|null} [timeData] EdgeTimeData timeData
         */

        /**
         * Constructs a new EdgeTimeData.
         * @memberof safevue_edge
         * @classdesc Current server time.
         * 
         * This is updated every 5 seconds.
         * 
         * Data topic: `dt/edge/time`
         * @implements IEdgeTimeData
         * @constructor
         * @param {safevue_edge.IEdgeTimeData=} [properties] Properties to set
         */
        function EdgeTimeData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EdgeTimeData version.
         * @member {number} version
         * @memberof safevue_edge.EdgeTimeData
         * @instance
         */
        EdgeTimeData.prototype.version = 0;

        /**
         * EdgeTimeData timeData.
         * @member {safevue_edge.EdgeTimeData.ITimeData|null|undefined} timeData
         * @memberof safevue_edge.EdgeTimeData
         * @instance
         */
        EdgeTimeData.prototype.timeData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * EdgeTimeData data.
         * @member {"timeData"|undefined} data
         * @memberof safevue_edge.EdgeTimeData
         * @instance
         */
        Object.defineProperty(EdgeTimeData.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["timeData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EdgeTimeData instance using the specified properties.
         * @function create
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {safevue_edge.IEdgeTimeData=} [properties] Properties to set
         * @returns {safevue_edge.EdgeTimeData} EdgeTimeData instance
         */
        EdgeTimeData.create = function create(properties) {
            return new EdgeTimeData(properties);
        };

        /**
         * Encodes the specified EdgeTimeData message. Does not implicitly {@link safevue_edge.EdgeTimeData.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {safevue_edge.IEdgeTimeData} message EdgeTimeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EdgeTimeData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timeData != null && Object.hasOwnProperty.call(message, "timeData"))
                $root.safevue_edge.EdgeTimeData.TimeData.encode(message.timeData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EdgeTimeData message, length delimited. Does not implicitly {@link safevue_edge.EdgeTimeData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {safevue_edge.IEdgeTimeData} message EdgeTimeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EdgeTimeData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EdgeTimeData message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.EdgeTimeData} EdgeTimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EdgeTimeData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.EdgeTimeData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timeData = $root.safevue_edge.EdgeTimeData.TimeData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EdgeTimeData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.EdgeTimeData} EdgeTimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EdgeTimeData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EdgeTimeData message.
         * @function verify
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EdgeTimeData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timeData != null && message.hasOwnProperty("timeData")) {
                properties.data = 1;
                {
                    var error = $root.safevue_edge.EdgeTimeData.TimeData.verify(message.timeData);
                    if (error)
                        return "timeData." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EdgeTimeData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.EdgeTimeData} EdgeTimeData
         */
        EdgeTimeData.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.EdgeTimeData)
                return object;
            var message = new $root.safevue_edge.EdgeTimeData();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timeData != null) {
                if (typeof object.timeData !== "object")
                    throw TypeError(".safevue_edge.EdgeTimeData.timeData: object expected");
                message.timeData = $root.safevue_edge.EdgeTimeData.TimeData.fromObject(object.timeData);
            }
            return message;
        };

        /**
         * Creates a plain object from an EdgeTimeData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {safevue_edge.EdgeTimeData} message EdgeTimeData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EdgeTimeData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.version = 0;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timeData != null && message.hasOwnProperty("timeData")) {
                object.timeData = $root.safevue_edge.EdgeTimeData.TimeData.toObject(message.timeData, options);
                if (options.oneofs)
                    object.data = "timeData";
            }
            return object;
        };

        /**
         * Converts this EdgeTimeData to JSON.
         * @function toJSON
         * @memberof safevue_edge.EdgeTimeData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EdgeTimeData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EdgeTimeData
         * @function getTypeUrl
         * @memberof safevue_edge.EdgeTimeData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EdgeTimeData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.EdgeTimeData";
        };

        EdgeTimeData.TimeData = (function() {

            /**
             * Properties of a TimeData.
             * @memberof safevue_edge.EdgeTimeData
             * @interface ITimeData
             * @property {number|null} [timestamp] unix timestamp in seconds
             * @property {number|null} [utcOffset] TimeData utcOffset
             */

            /**
             * Constructs a new TimeData.
             * @memberof safevue_edge.EdgeTimeData
             * @classdesc Represents a TimeData.
             * @implements ITimeData
             * @constructor
             * @param {safevue_edge.EdgeTimeData.ITimeData=} [properties] Properties to set
             */
            function TimeData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * unix timestamp in seconds
             * @member {number} timestamp
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @instance
             */
            TimeData.prototype.timestamp = 0;

            /**
             * TimeData utcOffset.
             * @member {number} utcOffset
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @instance
             */
            TimeData.prototype.utcOffset = 0;

            /**
             * Creates a new TimeData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {safevue_edge.EdgeTimeData.ITimeData=} [properties] Properties to set
             * @returns {safevue_edge.EdgeTimeData.TimeData} TimeData instance
             */
            TimeData.create = function create(properties) {
                return new TimeData(properties);
            };

            /**
             * Encodes the specified TimeData message. Does not implicitly {@link safevue_edge.EdgeTimeData.TimeData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {safevue_edge.EdgeTimeData.ITimeData} message TimeData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
                if (message.utcOffset != null && Object.hasOwnProperty.call(message, "utcOffset"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.utcOffset);
                return writer;
            };

            /**
             * Encodes the specified TimeData message, length delimited. Does not implicitly {@link safevue_edge.EdgeTimeData.TimeData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {safevue_edge.EdgeTimeData.ITimeData} message TimeData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TimeData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.EdgeTimeData.TimeData} TimeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.EdgeTimeData.TimeData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.utcOffset = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TimeData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.EdgeTimeData.TimeData} TimeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TimeData message.
             * @function verify
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TimeData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp))
                        return "timestamp: integer expected";
                if (message.utcOffset != null && message.hasOwnProperty("utcOffset"))
                    if (typeof message.utcOffset !== "number")
                        return "utcOffset: number expected";
                return null;
            };

            /**
             * Creates a TimeData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.EdgeTimeData.TimeData} TimeData
             */
            TimeData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.EdgeTimeData.TimeData)
                    return object;
                var message = new $root.safevue_edge.EdgeTimeData.TimeData();
                if (object.timestamp != null)
                    message.timestamp = object.timestamp >>> 0;
                if (object.utcOffset != null)
                    message.utcOffset = Number(object.utcOffset);
                return message;
            };

            /**
             * Creates a plain object from a TimeData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {safevue_edge.EdgeTimeData.TimeData} message TimeData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TimeData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timestamp = 0;
                    object.utcOffset = 0;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                if (message.utcOffset != null && message.hasOwnProperty("utcOffset"))
                    object.utcOffset = options.json && !isFinite(message.utcOffset) ? String(message.utcOffset) : message.utcOffset;
                return object;
            };

            /**
             * Converts this TimeData to JSON.
             * @function toJSON
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TimeData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TimeData
             * @function getTypeUrl
             * @memberof safevue_edge.EdgeTimeData.TimeData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TimeData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.EdgeTimeData.TimeData";
            };

            return TimeData;
        })();

        return EdgeTimeData;
    })();

    safevue_edge.AppVersionData = (function() {

        /**
         * Properties of an AppVersionData.
         * @memberof safevue_edge
         * @interface IAppVersionData
         * @property {number|null} [version] AppVersionData version
         * @property {number|null} [timestamp] message sent timestamp; unix timestamp in seconds
         * @property {safevue_edge.AppVersionData.IVersionData|null} [versionData] AppVersionData versionData
         */

        /**
         * Constructs a new AppVersionData.
         * @memberof safevue_edge
         * @classdesc Current watch app version
         * 
         * Published every server startup
         * 
         * Data topic: `dt/edge/app/version`
         * @implements IAppVersionData
         * @constructor
         * @param {safevue_edge.IAppVersionData=} [properties] Properties to set
         */
        function AppVersionData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppVersionData version.
         * @member {number} version
         * @memberof safevue_edge.AppVersionData
         * @instance
         */
        AppVersionData.prototype.version = 0;

        /**
         * message sent timestamp; unix timestamp in seconds
         * @member {number} timestamp
         * @memberof safevue_edge.AppVersionData
         * @instance
         */
        AppVersionData.prototype.timestamp = 0;

        /**
         * AppVersionData versionData.
         * @member {safevue_edge.AppVersionData.IVersionData|null|undefined} versionData
         * @memberof safevue_edge.AppVersionData
         * @instance
         */
        AppVersionData.prototype.versionData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * AppVersionData data.
         * @member {"versionData"|undefined} data
         * @memberof safevue_edge.AppVersionData
         * @instance
         */
        Object.defineProperty(AppVersionData.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["versionData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AppVersionData instance using the specified properties.
         * @function create
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {safevue_edge.IAppVersionData=} [properties] Properties to set
         * @returns {safevue_edge.AppVersionData} AppVersionData instance
         */
        AppVersionData.create = function create(properties) {
            return new AppVersionData(properties);
        };

        /**
         * Encodes the specified AppVersionData message. Does not implicitly {@link safevue_edge.AppVersionData.verify|verify} messages.
         * @function encode
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {safevue_edge.IAppVersionData} message AppVersionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppVersionData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.versionData != null && Object.hasOwnProperty.call(message, "versionData"))
                $root.safevue_edge.AppVersionData.VersionData.encode(message.versionData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AppVersionData message, length delimited. Does not implicitly {@link safevue_edge.AppVersionData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {safevue_edge.IAppVersionData} message AppVersionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppVersionData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppVersionData message from the specified reader or buffer.
         * @function decode
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {safevue_edge.AppVersionData} AppVersionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppVersionData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.AppVersionData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 3: {
                        message.versionData = $root.safevue_edge.AppVersionData.VersionData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppVersionData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {safevue_edge.AppVersionData} AppVersionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppVersionData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppVersionData message.
         * @function verify
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppVersionData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.versionData != null && message.hasOwnProperty("versionData")) {
                properties.data = 1;
                {
                    var error = $root.safevue_edge.AppVersionData.VersionData.verify(message.versionData);
                    if (error)
                        return "versionData." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AppVersionData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {safevue_edge.AppVersionData} AppVersionData
         */
        AppVersionData.fromObject = function fromObject(object) {
            if (object instanceof $root.safevue_edge.AppVersionData)
                return object;
            var message = new $root.safevue_edge.AppVersionData();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.versionData != null) {
                if (typeof object.versionData !== "object")
                    throw TypeError(".safevue_edge.AppVersionData.versionData: object expected");
                message.versionData = $root.safevue_edge.AppVersionData.VersionData.fromObject(object.versionData);
            }
            return message;
        };

        /**
         * Creates a plain object from an AppVersionData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {safevue_edge.AppVersionData} message AppVersionData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppVersionData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.timestamp = 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.versionData != null && message.hasOwnProperty("versionData")) {
                object.versionData = $root.safevue_edge.AppVersionData.VersionData.toObject(message.versionData, options);
                if (options.oneofs)
                    object.data = "versionData";
            }
            return object;
        };

        /**
         * Converts this AppVersionData to JSON.
         * @function toJSON
         * @memberof safevue_edge.AppVersionData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppVersionData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppVersionData
         * @function getTypeUrl
         * @memberof safevue_edge.AppVersionData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppVersionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/safevue_edge.AppVersionData";
        };

        AppVersionData.VersionData = (function() {

            /**
             * Properties of a VersionData.
             * @memberof safevue_edge.AppVersionData
             * @interface IVersionData
             * @property {string|null} [name] App package name
             * @property {string|null} [version] App version
             * @property {string|null} [versionCode] App version code
             * @property {string|null} [apkUrl] VersionData apkUrl
             */

            /**
             * Constructs a new VersionData.
             * @memberof safevue_edge.AppVersionData
             * @classdesc Represents a VersionData.
             * @implements IVersionData
             * @constructor
             * @param {safevue_edge.AppVersionData.IVersionData=} [properties] Properties to set
             */
            function VersionData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * App package name
             * @member {string} name
             * @memberof safevue_edge.AppVersionData.VersionData
             * @instance
             */
            VersionData.prototype.name = "";

            /**
             * App version
             * @member {string} version
             * @memberof safevue_edge.AppVersionData.VersionData
             * @instance
             */
            VersionData.prototype.version = "";

            /**
             * App version code
             * @member {string} versionCode
             * @memberof safevue_edge.AppVersionData.VersionData
             * @instance
             */
            VersionData.prototype.versionCode = "";

            /**
             * VersionData apkUrl.
             * @member {string} apkUrl
             * @memberof safevue_edge.AppVersionData.VersionData
             * @instance
             */
            VersionData.prototype.apkUrl = "";

            /**
             * Creates a new VersionData instance using the specified properties.
             * @function create
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {safevue_edge.AppVersionData.IVersionData=} [properties] Properties to set
             * @returns {safevue_edge.AppVersionData.VersionData} VersionData instance
             */
            VersionData.create = function create(properties) {
                return new VersionData(properties);
            };

            /**
             * Encodes the specified VersionData message. Does not implicitly {@link safevue_edge.AppVersionData.VersionData.verify|verify} messages.
             * @function encode
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {safevue_edge.AppVersionData.IVersionData} message VersionData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.versionCode != null && Object.hasOwnProperty.call(message, "versionCode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.versionCode);
                if (message.apkUrl != null && Object.hasOwnProperty.call(message, "apkUrl"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.apkUrl);
                return writer;
            };

            /**
             * Encodes the specified VersionData message, length delimited. Does not implicitly {@link safevue_edge.AppVersionData.VersionData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {safevue_edge.AppVersionData.IVersionData} message VersionData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VersionData message from the specified reader or buffer.
             * @function decode
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {safevue_edge.AppVersionData.VersionData} VersionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.safevue_edge.AppVersionData.VersionData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.version = reader.string();
                            break;
                        }
                    case 3: {
                            message.versionCode = reader.string();
                            break;
                        }
                    case 4: {
                            message.apkUrl = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VersionData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {safevue_edge.AppVersionData.VersionData} VersionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VersionData message.
             * @function verify
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VersionData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.versionCode != null && message.hasOwnProperty("versionCode"))
                    if (!$util.isString(message.versionCode))
                        return "versionCode: string expected";
                if (message.apkUrl != null && message.hasOwnProperty("apkUrl"))
                    if (!$util.isString(message.apkUrl))
                        return "apkUrl: string expected";
                return null;
            };

            /**
             * Creates a VersionData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {safevue_edge.AppVersionData.VersionData} VersionData
             */
            VersionData.fromObject = function fromObject(object) {
                if (object instanceof $root.safevue_edge.AppVersionData.VersionData)
                    return object;
                var message = new $root.safevue_edge.AppVersionData.VersionData();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.versionCode != null)
                    message.versionCode = String(object.versionCode);
                if (object.apkUrl != null)
                    message.apkUrl = String(object.apkUrl);
                return message;
            };

            /**
             * Creates a plain object from a VersionData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {safevue_edge.AppVersionData.VersionData} message VersionData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VersionData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.version = "";
                    object.versionCode = "";
                    object.apkUrl = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.versionCode != null && message.hasOwnProperty("versionCode"))
                    object.versionCode = message.versionCode;
                if (message.apkUrl != null && message.hasOwnProperty("apkUrl"))
                    object.apkUrl = message.apkUrl;
                return object;
            };

            /**
             * Converts this VersionData to JSON.
             * @function toJSON
             * @memberof safevue_edge.AppVersionData.VersionData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VersionData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VersionData
             * @function getTypeUrl
             * @memberof safevue_edge.AppVersionData.VersionData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VersionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/safevue_edge.AppVersionData.VersionData";
            };

            return VersionData;
        })();

        return AppVersionData;
    })();

    return safevue_edge;
})();

module.exports = $root;
