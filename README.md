# Examen1

Bikes and Stations CRUD using MEAN stack.

---

### Table of Contents

- [Models](#models)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

## Models

##### Bike schema

```javascript
const BikeSchema = new Schema({
    bike: { type: String, required: true },
    kms: { type: Number, required: true },
    description: { type: String, required: true, unique: true },
    assigned: { type: Boolean, required: true, unique: false }
});
```

##### Station schema

```javascript
const StationSchema = new Schema ({
    station: { type: String, required: true, unique: true },
    state: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    bikes: [{ type: Schema.ObjectId, ref: 'Bike', unique: false }]
});
```

##### Routes

| Model | Type | Routes | Description |
| :---:| :---: | --- | --- |
| STATION | GET | /stations | Get all Stations |
|  | GET | /stations/**:stationId**/bikedetail | Get the bike detail of a station |
|  | POST | /subjects/addbike | Add Bike into a Station |
|  | POST | /stations | Add a new Station |
|  | DELETE | /stations/**:stationId**/deletebike/**:bikeId** | Delete a Bike of a Station |
| BIKE | GET | /bikes | Get all Bikes |
|  | GET | /bikes/unassigned | Get all Unassigned Bikes |
|  | POST | /bikes | Add a new bike |


#### Technologies

- node.js
- express
- mongoose
- angular

## How To Use

#### Installation

Libraries:

```
npm i
```

Run node project:

```
nodemon index.js
```
>(1) Keep it running on a separate cmd while you are working on your project in order to see the changes   

Install angular:

```
npm install -g @angular/cli
npm install --save-dev @angular-devkit/build-angular
```

>The second command is used in order to avoid future errors

Run mongoDB:

```
mongod
```

>(2) Keep it running on a separate cmd while you are working on your project in order to see the changes  

Run the project on local server:

```
ng serve --open
```
>CAUTION!: You have to be on .\frontend folder in order to run this line 

>(3) Keep it running on a separate cmd while you are working on your project in order to see the changes   

## License

MIT License

Copyright (c) [2017] [James Q Quick]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Author Info

Sergi Vera
