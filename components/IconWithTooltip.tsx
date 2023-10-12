import { IconContainer, ToolTip } from './../styles/iconwithtooltip'
import IconWithToolTipProps from '../types/icon-with-tooltip'

export default function IconWithTooltip(props: IconWithToolTipProps) {
    return (
        <IconContainer>
            <ToolTip>{props?.toolTipText}</ToolTip>
            <props.icon size={32} />
        </IconContainer>
    )
}
