import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';


const { chains, provider } = configureChains(
  [sepolia],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://eth-sepolia.g.alchemy.com/v2/Lb_1DnotWt1LjIKAy_CKdUV4pvPIhFNG`,
        WebSocket: `wss://eth-sepolia.g.alchemy.com/v2/Lb_1DnotWt1LjIKAy_CKdUV4pvPIhFNG`,
      }),
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
          chains={chains}
          showRecentTransactions={true}
          modalSize="compact"
      >
          <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
