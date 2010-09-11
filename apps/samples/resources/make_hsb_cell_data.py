def save_hsb_chart_data(left_hue, right_hue):
  hsb_file = open('hsb_%d_%d' % (left_hue, right_hue), 'w')
  hues = [left_hue for i in range(5)]
  hues.extend([right_hue for i in range(4)])
  saturations = ['1', '0.75', '0.5', '0.25', '0', '0.25', '0.5', '0.75', '1']
  brightnesses = ['1', '0.875', '0.75', '0.625', '0.5', '0.375', '0.25', '0.125', '0']

  first = True

  row = 9
  for b in brightnesses:
    col = 1
    for s,h in zip(saturations, hues):
      if first:
        hsb_file.write("              cells: [{ color: { fill: 'hsb(%3ddeg, %5s, %5s)',  stroke: 'white'}, value: %3d, col: %d, row: %d },\n" % (h, s, b, h, col, row))
        #hsb_file.write("              cells: [{ color: { fill: 'hsb(%5.1f, %5s, %5s)',  stroke: 'white'}, value: %3d, col: %d, row: %d },\n" % ((float(h)/360.0)*1.0, s, b, h, col, row))
        first = False
      elif row == 1 and col == 9:
        hsb_file.write("                      { color: { fill: 'hsb(%3ddeg, %5s, %5s)',  stroke: 'white'}, value: %3d, col: %d, row: %d }]\n" % (h, s, b, h, col, row))
        #hsb_file.write("                      { color: { fill: 'hsb(%5.1f, %5s, %5s)',  stroke: 'white'}, value: %3d, col: %d, row: %d }]\n" % ((float(h)/360.0)*1.0, s, b, h, col, row))
      else:
        hsb_file.write("                      { color: { fill: 'hsb(%3ddeg, %5s, %5s)',  stroke: 'white'}, value: %3d, col: %d, row: %d },\n" % (h, s, b, h, col, row))
        #hsb_file.write("                      { color: { fill: 'hsb(%5.1f, %5s, %5s)',  stroke: 'white'}, value: %3d, col: %d, row: %d },\n" % ((float(h)/360.0)*1.0, s, b, h, col, row))
      col += 1
    row -= 1
  hsb_file.close()

save_hsb_chart_data(180, 0)
save_hsb_chart_data(210, 30)
save_hsb_chart_data(240, 60)
save_hsb_chart_data(270, 90)
save_hsb_chart_data(300, 120)
save_hsb_chart_data(330, 150)
