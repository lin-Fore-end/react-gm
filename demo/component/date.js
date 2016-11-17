import React from 'react';
import {
    Calendar,
    DatePicker,
    DateRangePicker,
    TimeSpan,
    TimeSpanPicker,
    Flex
} from '../../src/index';
import moment from 'moment';

class CalendarWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.handleSelect = ::this.handleSelect;
    }

    render() {
        return (
            <Flex>
                <div>
                    <div>一般情况</div>
                    <Calendar selected={this.state.selected} onSelect={this.handleSelect}/>
                </div>
                <div>
                    <div>带min max</div>
                    <Calendar
                        selected={this.state.selected}
                        onSelect={this.handleSelect}
                        min={moment().toDate()}
                        max={moment().add(10, 'd').toDate()}
                    />
                </div>
                <div>
                    <div>自定义日期是否可用 disabledDate</div>
                    <Calendar
                        selected={this.state.selected}
                        onSelect={this.handleSelect}
                        disabledDate={d => {
                            return d < new Date();
                        }}
                    />
                </div>
            </Flex>
        );
    }

    handleSelect(date) {
        this.setState({
            selected: date
        });
        console.log(arguments);
    }
}

class DatePickerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null
        };
        this.handleChange = ::this.handleChange;
    }

    render() {
        return (
            <div>
                <Flex>
                    <div>
                        <div>inline-block</div>
                        <DatePicker
                            date={this.state.date}
                            placeholder="adfasdf"
                            onChange={this.handleChange}
                            inputClassName="form-control input-sm"
                        />
                    </div>
                    <div>
                        <div>disabled</div>
                        <DatePicker
                            date={this.state.date}
                            placeholder="adfasdf"
                            disabled={true}
                            onChange={this.handleChange}
                            inputClassName="form-control input-sm"
                        />
                    </div>
                    <div>
                        <div>disabled date</div>
                        <DatePicker
                            date={this.state.date}
                            placeholder="选今天之后的"
                            onChange={this.handleChange}
                            inputClassName="form-control input-sm"
                            min={new Date()}
                        />
                    </div>
                    <div>
                        <div>disabled date</div>
                        <DatePicker
                            date={this.state.date}
                            placeholder="非周五"
                            onChange={this.handleChange}
                            inputClassName="form-control input-sm"
                            disabledDate={m => {
                                return moment(m).get('day') === 5;
                            }}
                        />
                    </div>
                </Flex>

                <div className="gm-padding10"></div>
                <DatePicker
                    date={this.state.date}
                    onChange={this.handleChange}
                >
                    <span>
                        {this.state.date ? moment(this.state.date).format('YYYY-MM-DD') : '请点击选择'}
                    </span>
                </DatePicker>
            </div>
        );
    }

    handleChange(date) {
        console.log(date);
        this.setState({
            date: date
        });
    }
}


class DaterangepickerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: new Date(),
            end: new Date()
        };
        this.handleChange = ::this.handleChange;
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    begin={this.state.begin}
                    end={this.state.end}
                    onChange={this.handleChange}
                    inputClassName="form-control input-sm"
                    endProps={{
                        min: this.state.begin
                    }}
                />

                <DateRangePicker
                    begin={this.state.begin}
                    end={this.state.end}
                    onChange={this.handleChange}
                    disabled={true}
                    inputClassName="form-control input-sm"
                />
            </div>
        );
    }

    handleChange(begin, end) {
        console.log(begin, end);
        this.setState({
            begin: begin,
            end: end
        });
    }
}

class TimeSpanWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().startOf('day').toDate()
        };
        this.handleChange = ::this.handleChange;
    }

    handleChange(date) {
        console.log(date);
        this.setState({
            date
        });
    }

    render() {
        return (
            <div>
                <div>
                    <TimeSpan
                        max={null}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                    <TimeSpan
                        max={moment().hour(20).minute(0)}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />

                    <TimeSpan
                        max={moment().hour(20).minute(0)}
                        span={60 * 60 * 1000}
                        render={value => moment(value).format('HH')}
                        selected={this.state.date}
                        onSelect={this.handleChange}
                    />
                </div>
                <div>
                    <TimeSpanPicker
                        date={this.state.date}
                        onChange={this.handleChange}
                    />

                    <TimeSpanPicker
                        disabled={true}
                        date={this.state.date}
                        onChange={this.handleChange}
                    />

                    <TimeSpanPicker
                        date={this.state.date}
                        onChange={this.handleChange}
                    >
                        <span>
                        {this.state.date ? moment(this.state.date).format('HH:mm') : '请点击选择'}
                        </span>
                    </TimeSpanPicker>
                </div>
            </div>
        );
    }
}

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1 id="date">日期</h1>
                <h2 id="Calendar">Calendar</h2>
                <CalendarWrap/>
                <h2 id="DatePicker">DatePicker</h2>
                <DatePickerWrap/>
                <h2 id="DaterangePicker">DaterangePicker</h2>
                <DaterangepickerWrap/>
                <h2 id="TimeSpanPicker">TimeSpan</h2>
                <TimeSpanWrap/>
            </div>
        );
    }
}

export default Component;