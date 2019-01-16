// If you're running on a device or in the Android simulator be sure to change
let  DIRECT_DOMAIN, METEOR_URL;

if (true) {
  DIRECT_DOMAIN = '10.111.11.27:3000'
  METEOR_URL = `ws://${DIRECT_DOMAIN}/websocket`
} else {
  DIRECT_DOMAIN = 'www.agropatterns.com'
  METEOR_URL = `wss://${DIRECT_DOMAIN}/websocket`
}

/*if (process.env.NODE_ENV === 'production') {
  DIRECT_DOMAIN = 'staging.agropatterns.com'
  METEOR_URL = `wss://${DIRECT_DOMAIN}/websocket`
}*/

export default config = {
  url: METEOR_URL
};

const AppName = "AgroPatterns"
const T9n = {}

export {T9n, DIRECT_DOMAIN};
