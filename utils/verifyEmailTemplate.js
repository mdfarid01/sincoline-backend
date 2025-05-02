const verifyEmailTemplate = ({name,url}) => {
    retun`

<p>Dear ${name}</p>
<p>Thank you for registration</p>
<a href=${url} style ="color:white; background-color:blue;margin-top:20px ">
    verify email
</a> 

    `
}

export default verifyEmailTemplate