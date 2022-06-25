import React from "react";
import ProfileInfo from "../fragments/profile";
import {Group, Header, SimpleCell} from "@vkontakte/vkui";
import {Icon28CheckCircleFill, Icon28CancelCircleFillRed} from "@vkontakte/icons";


class Dash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <Group>
                <ProfileInfo
                    name={"МБОУ СОШ № 315"}
                    avatarUrl={require("../../assets/avatar_school.png")}
                    licenceNumber={ "0000001"}
                />
                <Group mode="plain">
                    <Header>Доступность системы</Header>
                    <SimpleCell
                        before={<Icon28CheckCircleFill />}
                        description={"Uptime: " + 122 + " hours."}
                    >
                        Освноной сервер
                    </SimpleCell>
                    <SimpleCell
                        before={<Icon28CancelCircleFillRed />}
                        description={"Uptime: ERROR"}
                    >
                        API Сервер
                    </SimpleCell>
                </Group>
            </Group>
        )
    }

}

export default Dash;
