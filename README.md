

https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/e2ed3392-dc6c-4809-8039-d711b2e36e38

![MAI Therapist Files 1](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/c4b9e40d-a0a9-48af-84ea-019c1946c2e6)
![MAI Therapist Files 2](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/3f8d297e-dd3e-4de8-aa20-948b4ee0e569)
![MAI Therapist Files 3](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/22d48c4e-cf72-4555-8d5a-b707c05ccc2f)
![MAI Therapist Files 4](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/e5a00593-45b3-47ae-96f6-14735399ae32)
![MAI Therapist Files 5](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/78a620e8-be09-40aa-bf7c-cc7487e166c8)
![MAI Therapist Files 10](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/01ba8967-5e3d-42f2-9b8a-207db2c75c27)
![MAI Therapist Files 9](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/103e09e2-d0d7-4d5a-87e6-3add4fded917)
![MAI Therapist Files 8](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/89f234e3-18e0-4f76-afce-7b8daa6167aa)
![MAI Therapist Files 7](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/b0536b41-1c9c-4cf0-bde3-9ed56f62da5b)
![MAI Therapist Files 6](https://github.com/rbarisozkal/MAI-Therapist/assets/58304442/22a7ea38-1892-47d2-a02e-a2fdc6e2d03e)


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
