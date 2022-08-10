/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const intro = require('./documents/intro.json');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a tu agencia de carro, pregúntame sobre los servicios actuales o clientes nuevos, qué te gustaría conocer?  ';


        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                // Create Render Directive.
                handlerInput.responseBuilder.addDirective({
                        type: 'Alexa.Presentation.APL.RenderDocument',
                        token: "dialogManagementPagerDoc",
                        document: intro,
                        datasources: {
                            "imageTemplateData": {
                                "type": "object",
                                "objectId": "imageSample",
                                "properties": {
                                    "backgroundImage": {
                                        "contentDescription": null,
                                        "smallSourceUrl": null,
                                        "largeSourceUrl": null,
                                        "sources": [
                                            {
                                                "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                                                "size": "large"
                                            }
                                        ]
                                    },
                                    "image": {
                                        "contentDescription": null,
                                        "smallSourceUrl": null,
                                        "largeSourceUrl": null,
                                        "sources": [
                                            {
                                                "url": "https://source.unsplash.com/random/900×700/?cars,nissan,car",
                                                "size": "large"
                                            }
                                        ]
                                    },
                                    "title": "Nadro PoC",
                                    "logoUrl": "https://www.nadro.mx/paginaWeb/images/nadro/logo-nadro-menu.png"
                                }
                            }
                        }
                    })
                }
        



        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const RevenueIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RevenueIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La venta de hoy es de 134 millones de pesos, te acabo de enviar el reporte a tu correo para conocer el detalle. Recuerda que también me puedes preguntar sobre los renglones o de las piezas vendidas. Qué te gustaría conocer?. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .withSimpleCard(
                "Venta del Día", 
                "134.6 MDP")
            .getResponse();
    }
};


const AverageRevenueIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AverageRevenueIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La venta promedio del mes fue de 137 millones de pesos. Te acabo de compartir la liga para que puedas ver el detalle. o pregúntame sobre alguna categoría o cliente en especial. Qué te gustaría conocer?. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(
                "Venta del Promedio", 
                "137 MDP")
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const SumRevenueIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumRevenueIntent';
    },
    handle(handlerInput) {
        const speakOutput = `<speak>
    <amazon:emotion name="excited" intensity="medium">
        claro, fue un buen mes, 
    </amazon:emotion> la venta total de fue de 685 millones de pesos. Te gustaría que te envíe el reporte a tu correo?. 
</speak>`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(
                "Venta total", 
                "685 MDP")
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ordersIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ordersIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'De momento veo que hay 34,048 servicios en la ciudad de mexico, estado y monterrey. En que más te puedo ayudar?';
        
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                // Create Render Directive.
                handlerInput.responseBuilder.addDirective({
                        type: 'Alexa.Presentation.APL.RenderDocument',
                        token: "dialogManagementPagerDoc",
                        document: intro,
                        datasources: {
                            "imageTemplateData": {
                                "type": "object",
                                "objectId": "imageSample",
                                "properties": {
                                    "backgroundImage": {
                                        "contentDescription": null,
                                        "smallSourceUrl": null,
                                        "largeSourceUrl": null,
                                        "sources": [
                                            {
                                                "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                                                "size": "large"
                                            }
                                        ]
                                    },
                                    "image": {
                                        "contentDescription": null,
                                        "smallSourceUrl": null,
                                        "largeSourceUrl": null,
                                        "sources": [
                                            {
                                                "url": "https://i0.wp.com/academy.leewayweb.com/wp-content/uploads/2019/05/dashboard.png?fit=1568%2C951&ssl=1",
                                                "size": "large"
                                            }
                                        ]
                                    },
                                    "title": "Gráficas",
                                    "logoUrl": "https://www.nadro.mx/paginaWeb/images/nadro/logo-nadro-menu.png"
                                }
                            }
                        }
                    })
                }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const PosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PosIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hoy se realizaron un total de 17418 entregas. puedes preguntarme sobre algun cliente en especifico o ubicación, qué te gustaría hacer? ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const TimeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TimeIntent';
    },
    handle(handlerInput) {
        const speakOutput = `<speak>
    Te digo un secreto?.Para darte esa respuesta.
        <amazon:effect name="whispered">Necesito conocer más de tus sistemas y funcionalidades que buscas.</amazon:effect>
        Agendemos una sesión para descubirlo.
</speak>`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Nos vemos pronto!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        RevenueIntentHandler,
        AverageRevenueIntentHandler,
        SumRevenueIntentHandler,
        ordersIntentHandler,
        PosIntentHandler,
        TimeIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();