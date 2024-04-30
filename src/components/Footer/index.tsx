import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '港岛妹夫 NullPointerException';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '未来社畜养成基地',
          title: '点我加入Q群: 未来社畜养成基地',
          href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=JopXQRrC3UAYokDdwdTDS4X5p6eIzhmo&authKey=FLinJXzN5ICLbhG%2BwAKn3m26jPaE5g%2Bh%2BaSIcAs9YpESaXMWrFxuZb8iiTGlxt1o&noverify=0&group_code=462232623',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Laurc2004',
          blankTarget: true,
        },
        // {
        //   key: 'AI-BI',
        //   title: 'AI-BI',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  );
  // return (
  //   <DefaultFooter
  //     style={{
  //       background: 'none',
  //     }}
  //     links={[
  //       {
  //         key: 'Ant Design Pro',
  //         title: 'Ant Design Pro',
  //         href: 'https://pro.ant.design',
  //         blankTarget: true,
  //       },
  //       {
  //         key: 'github',
  //         title: <GithubOutlined />,
  //         href: 'https://github.com/ant-design/ant-design-pro',
  //         blankTarget: true,
  //       },
  //       {
  //         key: 'Ant Design',
  //         title: 'Ant Design',
  //         href: 'https://ant.design',
  //         blankTarget: true,
  //       },
  //     ]}
  //   />
  // );
};

export default Footer;
