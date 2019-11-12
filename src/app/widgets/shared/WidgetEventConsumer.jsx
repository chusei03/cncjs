import { WidgetEventContext } from './context';
import useWidgetEvent from './useWidgetEvent';

const WidgetEventConsumer = ({
    context: Context = WidgetEventContext,
    children,
}) => {
    const emitter = useWidgetEvent(Context);

    if (!emitter) {
        throw Error('The `WidgetEventConsumer` must be called from a descendent of the `WidgetEventProvider`.');
    }

    return typeof children === 'function'
        ? children(emitter)
        : children;
};

export default WidgetEventConsumer;