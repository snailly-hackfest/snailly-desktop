
## Snailly Desktop
![Dashboard](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/b019c0e6-1d7f-4421-9cfc-5db6144d6f76)

### Deskripsi
<p>Snailly adalah sebuah aplikasi untuk para orang tua mengontrol dan
mengawasi aktivitas anak-anak mereka dalam menggunakan internet, di mana anak-anak dapat mengeksplorasi dunia internet dengan aman dan orang tua tidak akan
 merasa khawatir tentang bahaya dari internet.</p>

## Instalasi
<p>Unduh file exe melalui release github, link tertera di bagian release</p>
Link: https://github.com/snailly-hackfest/snailly-desktop/tags

## Penggunaan
### 1. Buka Aplikasi Snailly
### 2. Pilih Menu Orang Tua
![Screenshot (142)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/1742f2b8-bf40-4680-be57-7a1899ffcd90)

### 3. Login Akun (email:dev@gmail.com pass:password)
![Screenshot (143)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/42381ff7-b3a3-4f38-b606-5f03c1f34547)

### 4. Pilih Menu Lock Agar Perangkat Anak Bisa Memblokir Website Negatif
![Screenshot (144)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/a32f9dc3-99ae-444f-8a7e-d89d9b1bc2b2)

### 5. Pilih Anak
![Screenshot (146)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/3bf54188-0fbe-4667-9c1f-bf0a758ce12a)

### 6. Jika Anak Mengakses Website Negatif Maka Browser Akan Mengarahkan Pencarian Anak Ke Halaman Blokir
![Screenshot (148)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/2c4f8427-3dfe-4139-8eb6-7fc2852d4598)

### 7. Orang Tua Bisa Melihat Aktifitas Pencarian Anak
![Screenshot (149)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/7cfaf611-7c57-4a96-a3fa-36b55ae5e07a)

```
## Mode Development
### Install Dependencies

```console
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Jalankan Mode Development

```console
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```

### Instalasi Script Python

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
