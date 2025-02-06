# 🏦 SUI Wallet Generator

This project is a simple **SUI wallet generator** built using **Node.js** and **@mysten/sui.js**.  
It creates a new SUI wallet, outputs the **address, public key, and private key (Bech32 format)**.

## ✨ Features
- ✅ Generates a new **SUI wallet**
- ✅ Outputs **SUI address**
- ✅ Shows **public key (Base64)**
- ✅ Encodes **private key in Bech32 format**
- ✅ Uses **Node.js and TypeScript**

---

## 📥 Installation

### 1️⃣ **Install Node.js** (if not installed)  
🔹 **Linux/macOS**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```
🔹 **Windows**: [Download from nodejs.org](https://nodejs.org/)

### 2️⃣ **Clone this repository**
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/sui-wallet-generator.git
cd sui-wallet-generator
```

### 3️⃣ **Install dependencies**
```bash
npm install
```

---

## 🚀 Usage

### 🏗 **Run the script**
```bash
node wallet.js
```

### 🛠 **Or run with `ts-node` (if using TypeScript)**
```bash
ts-node wallet.ts
```

---

## 📦 Required Dependencies
Before running the script, make sure to install **@mysten/sui.js**:
```bash
npm install @mysten/sui.js
```

---

## 📜 Example Output

```
✅ New SUI Wallet Created!
🔹 Address: 0xabc123...
🔹 Public Key: ABCDEFGHIJ...
🔹 Private Key (Bech32): suiprivkey1xyz...
```

---

## 🏗 **Contributing**
Feel free to submit **issues** or **pull requests**! 🚀

---

## ⚖️ **License**
This project is **MIT licensed**.

---

## 🔗 **Links**
- 🔹 [SUI SDK Documentation](https://sdk.mystenlabs.com/)
- 🔹 [Node.js Official Site](https://nodejs.org/)
- 🔹 [GitHub Repository](https://github.com/YOUR_GITHUB_USERNAME/sui-wallet-generator)
