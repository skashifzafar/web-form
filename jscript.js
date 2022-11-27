const contain=document.querySelector('#container')
const para=document.querySelector('.para')
para.innerHTML='This is not a real online service. You know you need something like this in your life to help you realise your deepest dream. <br> You know you want to.'
const form=document.querySelector('.form')
const form_head=document.createElement('div')
form_head.id='form_head'
form_head.innerHTML='Let\'s do this!'
form.appendChild(form_head)
const ip_field=document.createElement('div')
ip_field.id='ip_field'
const ip_arr=['fn','ln','em','pn','pw','2pw']
const ip_text={'fn':'First Name','ln':'Last Name','em':'Email','pn':'Phone Number','pw':'Password','2pw':'Confirm Password'}
const ip_field1=document.createElement('div')
const ip_field2=document.createElement('div')
for (let i=0;i<ip_arr.length;i++){
    const ip_div=document.createElement('div')
    const ip_name=document.createElement('label')
    ip_name.innerHTML=ip_text[ip_arr[i]]
    ip_name.htmlFor=ip_arr[i]
    const ip_fl=document.createElement('input')
    ip_fl.classList=ip_arr[i]
    ip_fl.name=ip_arr[i]
    ip_div.appendChild(ip_name)
    ip_div.appendChild(ip_fl)
    if (i<ip_arr.length/2){
        ip_field1.appendChild(ip_div)    
    }
    else{
        ip_field2.appendChild(ip_div)
    }
}
ip_field.appendChild(ip_field1)
ip_field.appendChild(ip_field2)
form.appendChild(ip_field)
const create=document.querySelector('.create')
const cr_but=document.createElement('button')
cr_but.type='submit'
cr_but.textContent='Submit'
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
bg_img.id='bg'
bg_img.src='bg/bg_left.jpg'
const bg_div=document.createElement('div')
bg_div.id='bg_div'
bg_div.appendChild(bg_img)
side.appendChild(bg_div)
const logo_div=document.createElement('div')
logo_div.id='logo_div'
const logo=document.createElement('img')
logo_div.appendChild(logo)
logo.src='bg/logo.png'
logo.id='logo'
side.appendChild(logo_div)
const bg_txt=document.createElement('div')
bg_txt.innerHTML='Photo by Automobili Lamborghini S.p.A.'
bg_txt.id='side_txt'
side.appendChild(bg_txt)


