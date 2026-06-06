import './profile_page.scss'
import { useState, useEffect } from 'react';
import { FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Back_button from '../../components/elements/back_button/back_button';
import Line from '../../components/elements/line/line'
import Page_space from '../../components/page_space/page_space'
import Header_menu from '../../components/elements/header_menu/header_menu'

function Profile_page() {
    const navigate = useNavigate();

    fetch('http://127.0.0.1:8000/get_user/', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

  const [userData, setUserData] = useState({
    first_name: '',
    email: '',
  });

   useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/get_user/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to load user');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadUser();
  }, []);

    return (            
        <Page_space>
            <Header_menu className='heater_profile_page'/>

            <Back_button onClick={() => navigate('/')}>
                <p className='profile_return_p'>Profile Settings</p>   
            </Back_button>

            <Line/>

            <div className='profile_block_column'>
                <div className='profile_icon_block'>
                    <FiUser className='profile_user_icon_heater'/>
                    <p className='profile_icon_edit'>Edit</p>
                </div>
                
                <div className='block1'>
                    <div className='profile_page_subblock_input'>
                        <p className='profile_page_p'>Name</p>
                        <input
                        value={userData.first_name}
                        className='profile_page_input'
                        type="text"
                        readOnly
                        />
                    </div>
                    <Line/>


                    <div className='profile_page_subblock_input'>
                        <p className='profile_page_p'>Email</p>
                        <input
                        value={userData.email}
                        className='profile_page_input'
                        type="text"
                        readOnly
                        />
                    </div>
                    <Line/>

                    <div className='profile_page_subblock_input'>
                        <p className='profile_page_p'>Password</p>
                        <input
                        defaultValue="Password"
                        className='profile_page_input'
                        type="text"
                        />
                    </div>
                    <Line/>
                </div>
            </div>
        </Page_space>
    )
}

export default Profile_page