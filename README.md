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
![Screenshot (157)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/a24d7f2b-e0b1-48ba-87cf-9f15e7313ee8)

### 3. Login account (email:devhackfest@gmail.com pass:password)
![Screenshot (150)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/24ae9a24-d7bf-4732-9184-5fe5219efda3)

### 4. Choose lock menu to block negative websites on kids' devices
![Screenshot (159)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/09e1e290-e342-4d26-a2bc-4a4be9883fa3)

### 5. select the desired child
![Screenshot (160)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/18b9a926-1684-46b4-9006-e13511e27fd2)
![Screenshot (161)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/f654f7d1-6e55-47b1-ac6c-d6695c0e3695)

### 6. If a child accesses a negative website, the browser will redirect the child's search to the block page.r
![Screenshot (160)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/d57d8e7d-3f48-4539-9f7d-47a414c52384)


### 7. Parents can view their child's search activity
![Screenshot (163)](https://github.com/snailly-hackfest/snailly-desktop/assets/66149479/fadaa8f5-cdd3-4eb6-8458-f597b2f55e31)

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
