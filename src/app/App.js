import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import {
    AppRoot, Badge,
    Epic, Group, Panel,
    PanelHeader, Placeholder,
    SplitCol, SplitLayout, Tabbar,
    TabbarItem, View,
    withAdaptivity,
} from "@vkontakte/vkui";
import {
    Icon28QrCodeOutline, Icon28SchoolOutline,
    Icon28UserOutline
} from "@vkontakte/icons";
import ProfilePage from "./panles/account";
import Dash from "./panles/dash";

const AppTabBar = withAdaptivity(
    ({ viewWidth }) => {
        const [activeStory, setActiveStory] = React.useState("dash");
        const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
        const isDesktop = false;

        return (
            <SplitLayout
                style={{ justifyContent: "center" }}
            >
                <SplitCol
                    animate={!isDesktop}
                    spaced={isDesktop}
                    width={isDesktop ? "560px" : "100%"}
                    maxWidth={isDesktop ? "560px" : "100%"}
                >
                    <Epic
                        activeStory={activeStory}
                        tabbar={
                            !isDesktop && (
                                <Tabbar>
                                    <TabbarItem
                                        onClick={onStoryChange}
                                        selected={activeStory === "dash"}
                                        data-story="dash"
                                        text="Школа"
                                    >
                                        <Icon28SchoolOutline />
                                    </TabbarItem>
                                    <TabbarItem
                                        onClick={onStoryChange}
                                        selected={activeStory === "qrcode"}
                                        data-story="qrcode"
                                        text="Пропуск"
                                    >
                                        <Icon28QrCodeOutline />
                                    </TabbarItem>
                                    <TabbarItem
                                        onClick={onStoryChange}
                                        selected={activeStory === "profile"}
                                        data-story="profile"
                                        indicator={<Badge mode="prominent" />}
                                        text="Профиль"
                                    >
                                        <Icon28UserOutline />
                                    </TabbarItem>
                                </Tabbar>
                            )
                        }
                    >
                        <View id="dash" activePanel="dash">
                            <Panel id="dash">
                                <PanelHeader>Информация</PanelHeader>
                                <Dash/>
                            </Panel>
                        </View>
                        <View id="qrcode" activePanel="qrcode">
                            <Panel id="qrcode">
                                <PanelHeader>QR Code </PanelHeader>
                                <Group style={{ height: "1000px" }}>
                                    <Placeholder
                                        icon={<Icon28QrCodeOutline width={56} height={56} />}
                                    ></Placeholder>
                                </Group>
                            </Panel>
                        </View>
                        <View id="profile" activePanel="profile">
                            <Panel id="profile">
                                <PanelHeader>Профиль</PanelHeader>
                                <ProfilePage/>
                            </Panel>
                        </View>
                    </Epic>
                </SplitCol>
            </SplitLayout>
        );
    },
    {
        viewWidth: true,
    }
)

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activePanel: "general"
        }

    }

    render() {
        return (
            <AppRoot>
                <AppTabBar/>
            </AppRoot>
        );
    }
}

export default App;
