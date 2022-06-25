import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import {
    AppRoot,
    Epic, Group, Panel,
    PanelHeader, Placeholder,
    SplitCol, SplitLayout, Tabbar,
    TabbarItem, View, Counter,
    withAdaptivity,
} from "@vkontakte/vkui";
import {
    Icon28QrCodeOutline, Icon28SchoolOutline,
    Icon28SettingsOutline, Icon28Notifications
} from "@vkontakte/icons";
import AdminPage from "./panles/admin";
import Dash from "./panles/dash";
import QRCodePage from "./panles/qr";

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
                                        indicator={<Counter size="s" mode="prominent">!</Counter>}
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
                                        selected={activeStory === "notifications"}
                                        data-story="notifications"
                                        text="Уведомления"
                                        indicator={<Counter size="s" mode="primary">3</Counter>}
                                    >
                                        <Icon28Notifications />
                                    </TabbarItem>
                                    <TabbarItem
                                        onClick={onStoryChange}
                                        selected={activeStory === "admin"}
                                        data-story="admin"
                                        text="Админка"
                                    >
                                        <Icon28SettingsOutline />
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
                                <PanelHeader>QR Code</PanelHeader>
                                <QRCodePage/>
                            </Panel>
                        </View>
                        <View id="notifications" activePanel="notifications">
                            <Panel id="notifications">
                                <PanelHeader>Уведомления</PanelHeader>
                                <Group style={{ height: "1000px" }}>
                                    <Placeholder
                                        icon={<Icon28Notifications width={56} height={56} />}
                                    ></Placeholder>
                                </Group>
                            </Panel>
                        </View>
                        <View id="admin" activePanel="admin">
                            <Panel id="admin">
                                <PanelHeader>Админ панель</PanelHeader>
                                <AdminPage/>
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
