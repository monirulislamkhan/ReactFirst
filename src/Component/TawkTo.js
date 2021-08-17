import tawkTo from "tawkto-react";
const tawkToPropertyId = '5d564ec377aa790be32f2580'
// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = 'a33be46f147009fc74816b1a735ae317f12653f7'
useEffect(() => {
  tawkTo(tawkToPropertyId, tawkToKey)
}, []);