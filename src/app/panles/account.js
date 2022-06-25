import React from 'react';
import {
    Group
} from "@vkontakte/vkui";
import ProfileInfo from "../fragments/profile";

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Group>
                <ProfileInfo
                    name={"Маслова Ольга Юрьевна"}
                    adName={"MaslovaOU"}
                    avatarUrl={require("../../assets/ava_admin.jpg")}
                    role={"Директор"}
                />
            </Group>
        )
    }
}


export default ProfilePage;