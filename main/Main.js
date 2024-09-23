import java.awt.*;
import javax.swing.*;
import java.awt.event.*;

public class Main {
  public static void main(String[] args) {
    final JFrame os = new JFrame("OS");
    os.setSize(1650, 1080);
    os.setExtendedState(JFrame.MAXIMIZED_BOTH);
    os.setUndecorated(true);
    os.setLayout(null);

    JButton home = new JButton("Files");
    home.setBounds(0, (1080/2)-30, 50, 50);
    home.setBackground(Color.BLACK);
    home.setForeground(Color.WHITE);
    home.setFocusPainted(false);
    home.setBorder(null);

    home.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        ImageIcon filesImage = new ImageIcon("src/files icon.png");
        final JFrame files = new JFrame("Files");
        files.setIconImage(filesImage.getImage());
        files.setSize(500, 500);
        files.setLayout(null);
        files.getContentPane().setBackground(Color.BLACK);
        files.setVisible(true);
      }
    });
    
    os.add(home);
    
    os.setVisible(true);
  }
}
