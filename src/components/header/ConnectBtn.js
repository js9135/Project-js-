import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';



const ConnectBtn = () => {
    const accountStatus = useAccount()
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div style={{ display: 'flex', gap: 12 }}>

                        {accountStatus.isConnected ?
                            <button
                                onClick={openChainModal}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid #8e8e8eb3 ',
                                    padding: '0.5rem',
                                    marginLeft: '1rem',
                                    borderRadius: '2rem',
                                    backgroundColor: 'transparent',

                                }}
                                type="button"
                            >
                                {chain.hasIcon && (
                                    <div
                                        style={{
                                            cursor: 'pointer',
                                            width: 25,
                                            height: 25,
                                            overflow: 'hidden',

                                        }}
                                    >
                                        {chain.iconUrl && (
                                            <img
                                                alt={chain ?? 'Chain icon'}
                                                src={chain.iconUrl}
                                                style={{ width: 25, height: 25, }}
                                            />
                                        )}
                                    </div>
                                )}
                                {/* {chain.name} */}
                            </button>
                            : null}



                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}


export default ConnectBtn;