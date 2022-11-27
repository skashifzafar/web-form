const contain=document.querySelector('#container')
const para=document.querySelector('.para')
para.innerHTML='This is not a real online service. You know you need something like this in your life to help you realise your deepest dream. <br> You know you want to.'
const form=document.querySelector('.form')
const form_head=document.createElement('div')
form_head.innerHTML='Let\'s do this!'
form.appendChild(form_head)
const ip_field=document.createElement('div')
const ip_arr=['fn','ln','em','pn','pw','2pw']
const ip_text={'fn':'First Name','ln':'Last Name','em':'Email','pn':'Phone Number','pw':'Password','2pw':'Confirm Password'}
for (let i=0;i<ip_arr.length;i++){
    const ip_div=document.createElement('div')
    const ip_name=document.createElement('div')
    ip_name.innerHTML=ip_text[ip_arr[i]]
    const ip_fl=document.createElement('input')
    ip_fl.classList=ip_arr[i]
    ip_div.appendChild(ip_name)
    ip_div.appendChild(ip_fl)
    ip_field.appendChild(ip_div)
}
form.appendChild(ip_field)
const create=document.querySelector('.create')
const cr_but=document.createElement('button')
cr_but.type='submit'
create.appendChild(cr_but)
const foot=document.querySelector('.footer')
const ft_text=document.createElement('div')
const ft_link=document.createElement('a')
ft_text.innerHTML='Already have an account?'
ft_link.innerHTML='Log in'
ft_link.href='https://github.com/'
foot.appendChild(ft_text)
foot.appendChild(ft_link)
const side=document.querySelector('#side')
const bg_img=document.createElement('img')
bg_img.src='bg/bg_left.jpg'
side.appendChild(bg_img)
const logo=document.createElement('img')
logo.src='bg/logo.png'
side.appendChild(logo)
const bg_txt=document.createElement('div')
bg_txt.innerHTML='Photo by Automobili Lamborghini S.p.A.'
side.appendChild(bg_txt)


