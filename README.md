Back-end docs:

Root url : https://1vfug9rbhd.execute-api.us-east-1.amazonaws.com/default

Current API's:

| Description   |      URL      |
|----------|:-------------:|
| Creates a new patient with given body:  | POST {rootUrl}/createPatient |
| Updates the patient with given id with given body | PUT ${rootUrl}/updatePatient?id={patientId}   |
| Get only one patient: | GET {rootUrl}/getPatient?id={patientId} |
| Get all patients: | GET ${rootUrl}/getPatients |
# mai-therapist

## Project setup

We have "yarn" as package manager. In order to setup project, you need to have yarn installed. If it is not installed default, you can install it on your command as

```
npm install --global yarn
```

then, go inside to project. Run following command:

```
yarn install
```

If terminal wants amplify configuration, you can simply follow instructions in this video : https://www.youtube.com/watch?v=IFXjm_fmNr8&t=9s&ab_channel=ProgramWithErik

After installing amplify, you will run this command to run the project on your local.

### Compiles and hot-reloads for development

```
yarn serve
```

git pull request testing

### Styling (UI) Libraries are

Vuetify 3.
https://next.vuetifyjs.com/en/components/all/

Material Design Icons
https://pictogrammers.com/library/mdi/

### Compiles and minifies for production

```
yarn build
```

"branches"

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
