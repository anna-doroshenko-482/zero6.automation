### ESLint formatting at VSCode
PRESS CTRL+S
### Environment variables to use for running tests
```
LOG_LEVEL= [ info | debug ]
ENV= [ dev | uat | qa02 ]
TEST_REPORTER = [ spec|mocha-junit-reporter|nyan|]
```
### How to run test separately with mocha
npm run mocha:specific 'Calculate current service for current user without scratch card for 3 months. 80Mb' - it name
### How to run suite separately with mocha
npm run mocha:specific 'Origin api. Calculate internet accounts' - describe name
### Before installation
```
rm -rf node_modules && npm cache clean -f
```
### IMPORTANT
DO NOT RUN SELENOID DIRECTLY from powershell or other ways! docker-compose will run them itself
### Work with framework on local machine
```
docker-compose down
docker system prune -a -f
rm -rf node_modules && npm cache clean -f

docker pull selenoid/vnc:chrome_95.0
docker pull selenoid/vnc:firefox_93.0
docker pull aerokube/selenoid:1.10.5
docker pull aerokube/selenoid-ui:1.10.4

docker pull selenoid/video-recorder:7.1
ENV=uat docker-compose up -d --build
docker-compose exec framework npm install && (selenoid:test || true)
```
```
ENV=uat docker-compose up -d --build
or
ENV=uat docker-compose up -d --build
or
ENV=dev02 LOG_LEVEL=info docker-compose up -d
or
ENV=dev02 docker-compose up -d
```
```
docker-compose exec framework npm install && (selenoid:test || true)
docker-compose down
```
### Run tests in pipeline
```
docker pull selenoid/vnc:chrome_95.0
docker pull selenoid/vnc:firefox_93.0
docker pull aerokube/selenoid:1.10.5
docker pull aerokube/selenoid-ui:1.10.4
docker pull selenoid/video-recorder:7.1
ENV=digitalOcean docker-compose up -d --build //  appLink: `${process.env.SERVER_IP}`,
docker-compose exec framework npm install && (selenoid:test || true) && docker-compose down
```
### Docker commands
```
docker-compose down
docker system prune -a -f
docker-compose up --force-recreate
docker build . -t agtb
docker ps
docker-compose up -d
docker exec -it billing-ui_framework_1 sh
npm install
npm run selenoid:test:decorator:report
docker exit
```



### Selenoid/browser.config
```
{
  "chrome": {
    "default": "95.0",
    "versions": {
      "95.0": {
        "image": "selenoid/vnc:chrome_95.0",
        "port": "4444",
        "path": "/",
        "tmpfs": { "/tmp": "size=1536m", "/var": "size=2000m" },
        "cpu": "2.0",
        "mem": "2500m",
        "env": ["TZ=Europe/Kiev", "LANG=ru_RU.UTF-8", "LANGUAGE=ru:en", "LC_ALL=ru_RU.UTF-8"]
      }
    }
  },
  "firefox": {
    "default": "93.0",
    "versions": {
      "93.0": {
        "image": "selenoid/vnc:firefox_93.0",
        "port": "4444",
        "path": "/wd/hub",
        "tmpfs": { "/tmp": "size=1536m", "/var": "size=2000m" },
        "cpu": "2.0",
        "mem": "2500m",
        "env": ["TZ=Europe/Kiev", "LANG=ru_RU.UTF-8", "LANGUAGE=ru:en", "LC_ALL=ru_RU.UTF-8"]
      }
    }
  }
}
```
