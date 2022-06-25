import React from 'react';
import {
    Avatar,
    Cell,
    Group,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Search,
    Spinner,
    View,
} from "@vkontakte/vkui";
import {
    Icon28MusicOutline,
    Icon28UserOutline,
    Icon28UsersOutline
} from "@vkontakte/icons";

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activePanel: "panel1",
        };
    }

    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Panel id="panel1">
                    <PanelHeader>More</PanelHeader>
                    <Group>
                        <Cell
                            expandable
                            before={<Icon28UserOutline />}
                            onClick={() => this.setState({ activePanel: "panel2" })}
                        >
                            Friends
                        </Cell>
                        <Cell
                            expandable
                            before={<Icon28UsersOutline />}
                            onClick={() => this.setState({ activePanel: "panel2" })}
                        >
                            Communities
                        </Cell>
                        <Cell
                            expandable
                            before={<Icon28MusicOutline />}
                            onClick={() => this.setState({ activePanel: "panel2" })}
                        >
                            Music
                        </Cell>
                    </Group>
                </Panel>
                <Panel id="panel2">
                    <PanelHeader
                        separator={false}
                        before={
                            <PanelHeaderBack
                                onClick={() => this.setState({ activePanel: "panel1" })}
                            />
                        }
                    >
                        Communities
                    </PanelHeader>
                    <Group>
                        <Search />
                        <Cell
                            description="Humor"
                            before={<Avatar />}
                            onClick={() => this.setState({ activePanel: "panel3" })}
                        >
                            Swipe Right
                        </Cell>
                        <Cell
                            description="Cultural Center"
                            before={<Avatar />}
                            onClick={() => this.setState({ activePanel: "panel3" })}
                        >
                            Out Cinema
                        </Cell>
                        <Cell
                            description="Movies"
                            before={<Avatar />}
                            onClick={() => this.setState({ activePanel: "panel3" })}
                        >
                            #ARTPOKAZ
                        </Cell>
                    </Group>
                </Panel>
                <Panel id="panel3" centered>
                    <PanelHeader
                        before={
                            <PanelHeaderBack
                                onClick={() => this.setState({ activePanel: "panel2" })}
                            />
                        }
                    >
                        Out Cinema
                    </PanelHeader>
                    <Spinner />
                    <div style={{ marginTop: 10 }}>Centered Content</div>
                </Panel>
            </View>
        );
    }
}


export default MainPage;