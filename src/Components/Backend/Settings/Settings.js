
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import General from './General/General';
import Style from './Style/Style';
import { generalStyleTabs } from '../../../utils/options';

const Settings = ({ attributes, setAttributes }) => {
	const { alignment } = attributes;

	return <>
		<InspectorControls>
			
			<TabPanel className='bPlTabPanel wp-block-rascl-service-card-layout' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			

		</BlockControls>
	</>;
};
export default Settings;