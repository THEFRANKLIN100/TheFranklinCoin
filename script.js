document.getElementById("connect-wallet").addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const walletAddress = accounts[0];
      document.getElementById("wallet-address").innerText = `Wallet: ${walletAddress}`;
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  } else {
    alert("MetaMask not detected. Please install it to use this feature.");
  }
});
