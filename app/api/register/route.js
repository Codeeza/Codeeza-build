import Form from "@/models/User/RegisterForm"

export const POST = async (request) => {
    try {
        const formData = await request.formData()
        
    } catch (error) {
        return new Response('Failed to add property', { status: 500 })
    }
}