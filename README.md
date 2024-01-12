
## Snailly Desktop
![Dashboard](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/b019c0e6-1d7f-4421-9cfc-5db6144d6f76)

### Description
<p>Snailly is an application for parents to control and supervise their children's activities on the internet.
supervise their children's activities on the internet, where children can explore the world of the internet safely and parents won't worry about the dangers of the internet.
 worry about the dangers of the internet. In this stage 2 we create the "Searching On Internet" feature according to the sequence diagram that we have proposed.</p>

## Installation
<p>Download the exe file via github release, the link is listed in the release section</p>.
Link: https://github.com/snailly-hackfest/snailly-desktop/tags

## Penggunaan
### 1. Open Snailly App
### 2. Choose parent button
![Screenshot (142)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/1742f2b8-bf40-4680-be57-7a1899ffcd90)

### 3. Login account (email:dev@gmail.com pass:password)
![Screenshot (143)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/42381ff7-b3a3-4f38-b606-5f03c1f34547)

### 4. Choose lock menu to block negative websites on kids' devices
![Screenshot (144)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/a32f9dc3-99ae-444f-8a7e-d89d9b1bc2b2)

### 5. select the desired child
![Screenshot (146)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/3bf54188-0fbe-4667-9c1f-bf0a758ce12a)

### 6. If a child accesses a negative website, the browser will redirect the child's search to the block page.r
![Screenshot (148)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/2c4f8427-3dfe-4139-8eb6-7fc2852d4598)

### 7. Parents can view their child's search activity
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
