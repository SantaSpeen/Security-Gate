import React from 'react';
import {
    Group, Placeholder
} from "@vkontakte/vkui";
import {Icon28QrCodeOutline} from "@vkontakte/icons";

class QRCodePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Group style={{ height: "1000px" }}>
                <Placeholder
                    icon={<Icon28QrCodeOutline width={56} height={56} />}
                ></Placeholder>

            </Group>
        )
    }
}


export default QRCodePage;