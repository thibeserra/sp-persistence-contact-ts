import Joi from 'joi';

const byId = {
  params: {
    id: Joi.number().min(1).required()
  }
}

export {byId};