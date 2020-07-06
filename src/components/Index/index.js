import React from 'react'
import Test from '../testUseState'
import Swiper from '../swiper'
import {TabsManager, Tabs, TabPanels, TabPanel} from 'react-md'
import './styles.scss'

export default function Main (){
    const tabs = ["Take-a-shot", "Swiper", "Tab 3","Tab 4"];
    const wrapper = React.createRef;
    return (
        <div>
            <TabsManager tabs={tabs}  ref={wrapper}>
                <Tabs/>
                <TabPanels>
                    <TabPanel>
                        {/* <Text type="headline-4">Panel 1</Text> */}
                        <p>Panel 1</p>
                        <Test/>
                    </TabPanel>
                    <TabPanel>
                        {/* <Text type="headline-4">Panel 2</Text> */}
                        <p>Panel 2</p>
                        <Swiper/>
                    </TabPanel>
                    <TabPanel>
                        <p>Panel 3</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Panel 4</p>
                    </TabPanel>
                </TabPanels>
            </TabsManager>
        </div>
    )
}