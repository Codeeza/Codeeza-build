import { Schema, model, models } from 'mongoose';

const RegisterFormSchema = new Schema(
  {
    company_name_OR_acount_num: {
      type: String,
      required: true
    },
    vat_num: {
      type: Number,
      required: true
    },
    ck_num: {
      type: Number,
      required: true
    },
    user_name: {
        type: String,
        required: true,
        unique: true
      },
    user_pass: {
        type: String,
        required: true
    },
    user_email: {
      type: String,
      unique: true,
      required: true
    },
    first_name:{
      type: String,
      required: true,
    },
    last_name:{
      type: String,
      required: true,
    },
    phone_num: {
      type: String,
      required: true,
      unique: true
    },
    nature_of_business: {
      type: String,
      required: true
    },
    buying_from: {
      type: String,
      required: true
    },
    specify_other_option:{
      type: String,
    },
    e_links:{
      type: String,
    },
    pos_held_in_comp:{
      type: String,
      required: true
    },
    location: {
        street: {
          type: String,
          required: true
        },
        street_line_two:{
          type: String,
          required: true
        },
        suburb: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        },
        zipcode: {
          type: String,
          required: true
        },
        country:{
          type: String,
          required: true
        }
    },
    sale_rep_assisted:{
      type: String,
      required: true
    },
    terms_agreement:{
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

const Form = models.RegisterForm || model('RegisterForm', RegisterFormSchema);

export default Form;