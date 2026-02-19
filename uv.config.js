self.__uv$config = {
    // 👇 あなたのリポジトリ名に合わせた正しいパス（非常に重要です）
    prefix: '/my-proxy-web-front-end-2026/service/',
    
    // 👇 あなたのRenderのURLに書き換えてください（最後の /bare/ は消さない）
    bare: 'https://tomato-kyuri.onrender.com/bare/', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.handler.js',
    bundle: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.bundle.js',
    config: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.config.js',
    sw: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.sw.js',
};
