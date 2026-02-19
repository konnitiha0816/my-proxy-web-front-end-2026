self.__uv$config = {
    prefix: '/service/',
    // 👇 ここを第二章で作成したRenderのURLに変更する（最後の /bare/ を忘れないこと）
    bare: 'https://tomato-kyuri.onrender.com/bare/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.handler.js',
    bundle: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.bundle.js',
    config: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.config.js',
    sw: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@3.2.4/dist/uv.sw.js',
};
