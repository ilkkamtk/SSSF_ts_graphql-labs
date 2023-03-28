import {Animal} from '../../interfaces/Animal';
import animalModel from '../models/animalModel';

export default {
  Query: {
    animals: async () => {
      return await animalModel.find();
    },
  },
};
