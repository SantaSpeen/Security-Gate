import {
    Avatar,
    Button,
    Gradient,
    SizeType, Text,
    Title
} from "@vkontakte/vkui";

const ProfileInfo = ({ avatarUrl, name, adName, role, licenceNumber}) => {
    return (
            <Gradient
                style={{
                    margin: SizeType.REGULAR ? "-7px -7px 0 -7px" : 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 32,
                }}
            >
                <Avatar size={96} src={avatarUrl}/>
                <Title
                    style={{ marginBottom: 8, marginTop: 20 }}
                    level="2"
                    weight="2"
                >
                    {name}
                </Title>
                { adName && <Text style={{}}>
                    Active Directory: {adName}
                </Text>
                }
                <Text style={{ marginBottom: 24, color: "var(--text_secondary)", paddingTop: 10}}>
                    {role !== undefined ? role : "Лецензия № " +  licenceNumber}
                </Text>
                <Button size="m" mode="secondary">
                    Редактировать
                </Button>
            </Gradient>
    );
};

export default ProfileInfo;