
## Snailly Desktop
[Dashboard](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/3047d139-4b8e-495c-9f6d-53171cc03b97)

### Deskripsi
<p>Snailly adalah sebuah aplikasi untuk para orang tua mengontrol dan
mengawasi aktivitas anak-anak mereka dalam menggunakan internet, di mana anak-anak dapat mengeksplorasi dunia internet dengan aman dan orang tua tidak akan
 merasa khawatir tentang bahaya dari internet.</p>

## Penggunaan

### Create an App

```console
# with npx
$ npx create-nextron-app my-app --example with-typescript-emotion

# with yarn
$ yarn create nextron-app my-app --example with-typescript-emotion

# with pnpx
$ pnpx create-nextron-app my-app --example with-typescript-emotion
```

### Install Dependencies

```console
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```console
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```

### Python Scripts

```console
# install required libraries
$ pip install pyinstaller
$ pip install mitmproxy
$ pip install httpx
$ pip install PyJWT

# build python script
$ pyinstaller --distpath "./bin" snaily_proxy.spec
$ pyinstaller --distpath "./bin" init_proxy.spec
```
