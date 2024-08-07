import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
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
      required: true
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
      required: true
    },
    e_links:{
      type: String,
      required: true
    },
    pos_held_in_comp:{
      type: String,
      required: true
    },
    location: {
      street: {
        type: String,
      },
      suburb: {
        type: String,
      },
      city: {
        type: String,
      },
      zipcode: {
        type: String,
      },
      country:{
        type: String
      }
    },
    sale_rep_assisted:{
      type: String,
      required: true
    },
    terms_agreement:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', UserSchema);

export default User;