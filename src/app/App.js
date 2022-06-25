import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import {
    AppRoot, Badge,
    Epic,
    Group,
    Panel,
    PanelHeader, Placeholder,
    SplitCol,
    SplitLayout, Tabbar, TabbarItem,
    usePlatform, View,
    VKCOM,
    withAdaptivity,
} from "@vkontakte/vkui";
import {
    Icon28QrCodeOutline, Icon28TearOffFlyerOutline,
    Icon28UserCircleOutline, Icon28UserOutline, Icon56NewsfeedOutline
} from "@vkontakte/icons";

const AppTabBar = withAdaptivity(
    ({ viewWidth }) => {
        const platform = usePlatform();
        const [activeStory, setActiveStory] = React.useState("profile");
        const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
        const isDesktop = false;
        const hasHeader = platform !== VKCOM;

        return (
            <SplitLayout
                header={hasHeader && <PanelHeader separator={false} />}
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
                                        selected={activeStory === "school"}
                                        data-story="school"
                                        text="Школа"
                                    >
                                        <Icon28TearOffFlyerOutline />
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
                        <View id="school" activePanel="school">
                            <Panel id="school">
                                <PanelHeader>О школе</PanelHeader>
                                <Group style={{ height: "1000px" }}>
                                    <Placeholder
                                        icon={<Icon56NewsfeedOutline width={56} height={56} />}
                                    />
                                </Group>
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
                                <Group style={{ height: "1000px" }}>
                                    <Placeholder
                                        icon={<Icon28UserCircleOutline width={56} height={56} />}
                                    ></Placeholder>
                                </Group>
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
