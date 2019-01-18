import {Car} from '../car.model';
import {Action} from '@ngrx/store';
import {AddCar, CAR_ACTION} from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function carsReducer(state = initialState, action: AddCar){
 switch (action.type){
   case CAR_ACTION.ADD_CAR:
     return {
       ... state,
       cars: [...state.cars, action.payload]
     };
   // один из важнейших принципов reducer-а это то
   // мы должны в любом случае должны что-то вернуть из него
   // и по умолчанию мы будем возвращать наш state
   default:
     return state;
 }
}
