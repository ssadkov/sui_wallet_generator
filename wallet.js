import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { encodeSuiPrivateKey } from "@mysten/sui/cryptography";


function createWallet() {
    // 1️⃣ Создаем новую пару ключей
    const keypair = new Ed25519Keypair();
    
    // 2️⃣ Получаем SUI-адрес
    const address = keypair.toSuiAddress();
    
    // 3️⃣ Получаем публичный ключ
    const publicKey = keypair.getPublicKey().toBase64();

    // 4️⃣ Получаем приватный ключ (Base64) через getSecretKey()
    const privateKey = keypair.getSecretKey();


    console.log("✅ Новый SUI кошелек создан!");
    console.log("🔹 Адрес: ", address);
    console.log("🔹 Публичный ключ: ", publicKey);
    console.log("🔹 Приватный ключ (Base64): ", privateKey);
    
    return { address, publicKey, privateKey };
}

// Генерация кошелька
createWallet();
