import connectDB from "@/config/database"
import Form from "@/models/User/RegisterForm"


export const POST = async (request) => {
        const formData = await request.formData()

        const UserData = {
            company_name_OR_acount_num : 
                formData.get("company_name_OR_acount_num"),
            vat_num : formData.get("company_name_OR_acount_num"),
            ck_num : formData.get("ck_num"),
            user_name: formData.get("user_name"),
            user_pass: formData.get("user_pass"),
            user_email: formData.get("user_email"),
            first_name: formData.get("first_name"),
            last_name: formData.get("lane_name"),
            phone_num: formData.get("phone_num"),
            nature_of_business: formData.get("nature_of_business"),
            buying_from: formData.get("buying_from"),
            specify_other_option: formData.get("specify_other_option"),
            e_links: formData.get("e_links"),
            pos_held_in_comp : formData.get("pos_held_in_comp"),
            location:{
                street: formData.get("location.street"),
                street_line_two: formData.get("location.street_line_two"),
                suburb: formData.get("location.suburb"),
                city: formData.get("location.city"),
                zipcode: formData.get("location.zipcode" || 0),
                country: formData.get("location.country"),
            },
            sale_rep_assisted: formData.get("sale_rep_assisted"),
            terms_agreement: formData.get("terms_agreement"),
        }
        try {
            const newUser = await Form.create(UserData)
            return Response.json(JSON.stringify(newUser), {status: 200})
        } catch (error) {
            return Response.json('Failed to add user details', { status: 500 })
        }
}