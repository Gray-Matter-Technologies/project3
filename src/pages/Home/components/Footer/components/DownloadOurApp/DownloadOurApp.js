import React from "react";
import styled from "styled-components";


const DownloadOurAppContainer = styled.div`
width: 400px;
list-style:none;
margin-top: 20px;

a { text-decoration: none; color:white } 
li {list-style-type:none;}
`

const DownloadOurApp = (props) => {
  return(
    <DownloadOurAppContainer>
      <ul className='footer__links-column'>
          <a  href='about:blank' target="_blank" rel="noopener noreferrer">
            <li>Download our app</li>
          </a>
          <a  href='about:blank' target="_blank" rel="noopener noreferrer">
            <li>Tackle your to-do list
              <br></br> 
            wherever you are with our mobile app.</li>
          </a>
          <a class="box-no-padding appstore-badge" data-behavior="app-link-clicked" data-source="footer" href="https://control.kochava.com/v1/cpi/click?app_source=website&amp;app_medium=button&amp;app_campaign=app-ios&amp;campaign_id=koios-client-app-c36sca13f37d993fe&amp;network_id=9569&amp;site_id=1&amp;device_id=device_id" data-registered="">
          <img alt="Download app from Apple Store" height="45" data-src="https://assets.taskrabbit.com/v3/assets/web/en-US/appstore_badge-86c9954e1457d27db013c1f10a96ffaba845e5af7765c4ef9df4ac1549e47d67.svg" src="https://assets.taskrabbit.com/v3/assets/web/en-US/appstore_badge-86c9954e1457d27db013c1f10a96ffaba845e5af7765c4ef9df4ac1549e47d67.svg" />
          </a>
          <a class="box-no-padding appstore-badge" data-behavior="app-link-clicked" data-source="footer" href="https://control.kochava.com/v1/cpi/click?app_source=website&amp;app_medium=button&amp;app_campaign=app-android&amp;campaign_id=koandroid-client-app-ycext502e452a4c83c977&amp;network_id=9569&amp;site_id=1&amp;device_id=device_id" rel="noopener" target="_blank" data-registered="">
          <img alt="Download app from Google Play Store" height="45" data-src="https://assets.taskrabbit.com/v3/assets/web/en-US/google_play_badge-49e6ea4ba78ca19b1246873b3369891cb6e289515c11418f1fce4cb3a694c18a.svg" src="https://assets.taskrabbit.com/v3/assets/web/en-US/google_play_badge-49e6ea4ba78ca19b1246873b3369891cb6e289515c11418f1fce4cb3a694c18a.svg" />
          </a>
        </ul>
    </DownloadOurAppContainer>
  );
};

export default DownloadOurApp;