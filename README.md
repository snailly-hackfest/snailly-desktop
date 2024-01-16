## Snailly Desktop
<img src="https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/c731e590-a07a-4adf-a477-cf49086e1096" />


### Description
<p>Snailly is an application for parents to control and supervise their children's activities on the internet.
supervise their children's activities on the internet, where children can explore the world of the internet safely and parents won't worry about the dangers of the internet.
 worry about the dangers of the internet. In this stage 2 we create the "Searching On Internet" feature according to the sequence diagram that we have proposed.</p>

## Installation
<p>Download the exe file via github release, the link is listed in the release section</p>.
Link: https://github.com/snailly-hackfest/snailly-desktop/tags

## Tutorial
### 1. Open Snailly App
### 2. Choose parent button
![Screenshot (142)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/1742f2b8-bf40-4680-be57-7a1899ffcd90)

### 3. Login account (email:dev@gmail.com pass:password)
![Screenshot (150)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/24ae9a24-d7bf-4732-9184-5fe5219efda3)

### 4. Choose lock menu to block negative websites on kids' devices
![Screenshot (151)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/bff69417-25f3-4b95-9c52-c9aff7737267)

### 5. select the desired child
![Screenshot (146)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/f4b6a4d8-adc9-4caf-a4e9-cf540fcbfc75)

### 6. If a child accesses a negative website, the browser will redirect the child's search to the block page.r
![Screenshot (148)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/11afd8de-b188-4d75-bba9-6dde826d9f94)


### 7. Parents can view their child's search activity
![Screenshot (149)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/e71ce0d6-a5c1-43e8-a3ec-a1d274482f51)

## Mode Development
```
### Install Dependencies

```console
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Run Development Mode

```console
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```

### Installation Script Python

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
