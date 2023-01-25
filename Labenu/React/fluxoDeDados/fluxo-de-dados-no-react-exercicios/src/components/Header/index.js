import {TitleHeader, ProfilePicture, Name, UserInfo, HeaderBox} from './styled'


export const Header = ({data}) => {
    return(
       
            <HeaderBox>
                <TitleHeader>
                Insta4    
                </TitleHeader>
                <UserInfo>
                    <ProfilePicture src={data.photo}/>
                    <Name>{data.name}</Name>
                </UserInfo>   
            </HeaderBox>
    )
}