self.__uv$config = {
    // 👇 ここが一番重要！ リポジトリ名を挟んだ正しいパスです
    prefix: '/my-stealth-web/service/',
    
    // 👇 あなたのRenderのURL（末尾の /bare/ を忘れずに）
    bare: 'https://tomato-kyuri.onrender.com/bare/', 
    
    // 👇 ここから下が「以下略」にしてしまっていた、絶対に消してはいけない必須機能群です
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.handler.js',
    bundle: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.bundle.js',
    config: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.config.js',
    sw: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.sw.js',
};
